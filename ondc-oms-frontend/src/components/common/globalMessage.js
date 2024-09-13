import React from 'react';
import { Button, message, Space } from "antd";
// utils.js

export const showMessage = (type, content) => {
    switch(type) {
        case 'success':
            message.success(content);
            break;
        case 'error':
            message.error(content);
            break;
        case 'info':
            message.info(content);
            break;
        case 'warning':
            message.warning(content);
            break;
        default:
            message.info(content);
    }
};