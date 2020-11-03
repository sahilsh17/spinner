
const spin = function(st, time) {
  setTimeout(() => {
    process.stdout.write(st);
  }, time);
};
spin('\r|   ',100);
spin('\r/   ',300);
spin('\r-   ',500);
spin('\r\\   ',700);
spin('\r|   ',900);
