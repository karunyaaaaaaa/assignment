// validationMiddleware.js
const express = require('express');

// Configurable middleware for validating author input
const validateAuthorInput = (config) => {
  return (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password || username.length < config.minUsernameLength || password.length < config.minPasswordLength) {
      return res.status(400).json({ message: 'Bad Request - Invalid author input' });
    }

    next();
  };
};

// Middleware for validating author IDs as integers
const validateAuthorId = (req, res, next) => {
  const authorId = parseInt(req.params.authorId);

  if (isNaN(authorId) || !Number.isInteger(authorId) || authorId <= 0) {
    return res.status(400).json({ message: 'Bad Request - Invalid author ID' });
  }

  next();
};

module.exports = {
  validateAuthorInput,
  validateAuthorId,
};