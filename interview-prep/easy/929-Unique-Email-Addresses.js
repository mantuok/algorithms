const numUniqueEmails = (emails) => {
  const unique = new Set();

  for (let email of emails) {
    let i = 0;
    let local = "";
    let domain = "";
    while (email[i] !== "@" && email[i] !== "+") {
      if (email[i] !== ".") {
        local += email[i];
      }
      i++;
    }
    while (email[i] !== "@") {
      i++;
    }
    domain = email.substring(i);
    unique.add(local + domain);
  }

  return unique.size;
}