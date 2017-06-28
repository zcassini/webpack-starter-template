const listener = new window.keypress.Listener()
const display = document.getElementById('display')

let state = ''

const update = x => {
  switch (true) {
    case x === '=':
      state = eval(state)
      break
    case x === 'C':
      state = ''
      break
    default:
    // state = (/[0-9\.]/.test(x) ? state + x : x + state)
      state += x
  }
  console.log(state)
  display.value = state
  display.value = state
}

const playSound = snd => {
  const sound = document.getElementById(snd)
  return () => { sound.currentTime = 0 // rewinds to the start
                 sound.play()
               }
}

const downSound = playSound('sndKeyDown')
const upSound   = playSound('sndKeyUp')

const keyMaker = (key, val, id) => ({
  'keys'           : key,
  'is_exclusive'   : true,
  'on_keydown'     : () => {
    downSound()
    console.log(key)
    update(val)
    document.getElementById(id || val).classList.toggle('press')
  },
  'on_keyup'       : () => {
    document.getElementById(id || val).classList.toggle('press')
    upSound()
  },
  'prevent_repeat' : true
})

const my_combos = listener.register_many([
  keyMaker('num_1', '1'),
  keyMaker('num_2', '2'),
  keyMaker('num_3', '3'),
  keyMaker('num_4', '4'),
  keyMaker('num_5', '5'),
  keyMaker('num_6', '6'),
  keyMaker('num_7', '7'),
  keyMaker('num_8', '8'),
  keyMaker('num_9', '9'),
  keyMaker('num_0', '0'),
  keyMaker('num_divide',   '/', 'slash'),
  keyMaker('num_multiply', '*', 'star'),
  keyMaker('num_subtract', '-', 'minus'),
  keyMaker('num_add',      '+', 'plus'),
  keyMaker('num_enter',    '=', 'enter'),
  keyMaker('num_lock',     'C', 'C'),
  keyMaker('num_decimal',  '.', 'decimal'),
  //
  keyMaker('insert',   '0'),
  keyMaker('delete',   '.'),
  keyMaker('end',      '1'),
  keyMaker('down',     '2'),
  keyMaker('pagedown', '3'),
  keyMaker('left',     '4'),
  keyMaker('num',      '5'),
  keyMaker('right',    '6'),
  keyMaker('home',     '7'),
  keyMaker('up',       '8'),
  keyMaker('pageup',   '9'),
  //
  keyMaker('1', '1'),
  keyMaker('2', '2'),
  keyMaker('3', '3'),
  keyMaker('4', '4'),
  keyMaker('5', '5'),
  keyMaker('6', '6'),
  keyMaker('7', '7'),
  keyMaker('8', '8'),
  keyMaker('9', '9'),
  keyMaker('0', '0'),
  keyMaker('enter', '=', 'enter')
])

