import EventEmitter from 'events'; //import EventEmitter tu thu vien events cua nodejs

const _emitter = new EventEmitter(); //tao 1 doi tuong emitter tu EventEmitter
_emitter.setMaxListeners(0); //set so luong listener toi da la 0

export const emitter = _emitter; //export emitter de su dung o cac file kha