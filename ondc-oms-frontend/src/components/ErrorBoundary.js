import React from 'react';
import { Result, Button } from 'antd';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ error, errorInfo });
  }

  render() {
    const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME
    const supportContactEmail = process.env.NEXT_PUBLIC_SUPPORT_CONTACT_EMAIL

    if (this.state.hasError) {
      // You can render any custom fallback UI
      const subject = `${projectName} - UI error report`;
      const body = `${this.state.error}%0D%0A${JSON.stringify(
        this.state.errorInfo
      )}`;
      const textStyle = {
        fontSize: "24px",
        fontFamily: "Helvetica Neue",
        letterSpacing: "0.5px",
        textAlign: "center",
        fontWeight: "400"
      }

      const warningTitle = (
        <p style={textStyle}>
          Sorry, something went wrong. Please contact{' '}
          <a
            target="_blank" rel="noreferrer"
            href={`mailto:${supportContactEmail}?subject=${subject}&body=${body}`}
            >
            {supportContactEmail}
          </a>
          {' '}
          if the problem persists.
        </p>
      )

      return (
        <Result
          title={warningTitle}
          status="warning"
          extra={
              <Button href="/" type="secondary">
                  Refresh
                </Button>
              }
              />
      );
    }
    return this.props.children;
  }
}
