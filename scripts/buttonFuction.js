// buttonFunction.js

const log = document.getElementById('button-log');
const error = document.getElementById('button-error');
const count = document.getElementById('button-count');
const warn = document.getElementById('button-warn');
const assert = document.getElementById('button-assert');
const clear = document.getElementById('button-clear');
const dir = document.getElementById('button-dir');
const dirxml = document.getElementById('button-dirxml');
const start = document.getElementById('button-start');
const end = document.getElementById('button-end');
const table = document.getElementById('button-table');
const timer = document.getElementById('button-timer');
const etimer = document.getElementById('button-etimer');
const trace = document.getElementById('button-trace');
const gerror = document.getElementById('button-gerror');
const myerror = document.getElementById('button-myerror');

log.addEventListener('click', (event) => {
    console.log('Log button clicked');
});

error.addEventListener('click', (event) => {
    console.error('Error button clicked');
});

let cnt = 0;
count.addEventListener('click', (event) => {
    cnt++;
    console.log('Current count is: ' + cnt);
});

warn.addEventListener('click', (event) => {
    console.warn('Warn button clicked');
});

assert.addEventListener('click', (event) => {
    console.assert(2 % 2 == 1, {errorMsg: '2 % 2 == 1 failed.'});
});

clear.addEventListener('click', (event) => {
    console.clear();
});

dir.addEventListener('click', (event) => {
    console.dir(dir);
});

dirxml.addEventListener('click', (event) => {
    console.dirxml(dirxml);
});

start.addEventListener('click', (event) => {
    console.group();
});

end.addEventListener('click', (event) => {
    console.groupEnd();
});

table.addEventListener('click', (event) => {
    console.table([
        {
            name: 'Midterm 1',
            score: 100
        }, {
            name: 'Midterm 2',
            score: 98
        }, {
            name: 'Final',
            score: 85
        }
      ]);
});

timer.addEventListener('click', (event) => {
    console.time('Time spent');
});

etimer.addEventListener('click', (event) => {
    console.timeEnd('Time spent');
});

trace.addEventListener('click', (event) => {
    console.trace(trace);
    console.trace(cnt);
});

gerror.addEventListener('click', (event) => {
    throw new Error("fail");
});

myerror.addEventListener('click', (event) => {
    try {
        test(1, 2);
        test(a, 3);
      } catch(err) {
        alert(err.message); // wrong input format!
        alert(err.name); // WrongInputFormatError
        alert(err.stack); // a list of nested calls with line numbers for each
    }
})