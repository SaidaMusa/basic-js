function getEmailDomain(email) {
  const idx = email.lastIndexOf('@');
  return email.slice(idx + 1);
}

module.exports = getEmailDomain;
