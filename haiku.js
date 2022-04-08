const haikus = [
  `A file that big?
It might be very useful.
But now it is gone.`,
  `Stay the patient course.
Of little worth is your ire,
The network is down.`,
  `You step in the stream,
but the water has moved on.
This page is not here.`,
  `Having been erased,
The document you're seeking
Must now be retyped.`,
  `Serious error.
All shortcuts have disappeared.
Screen. Mind. Both are blank.`,
  `Chaos reigns within.
Reflect, repent, and reboot.
Order shall return.`,
  `First snow, then silence.
This thousand dollar screen dies
so beautifully.`,
  `The Tao that is seen
Is not the true Tao, until
You bring fresh toner.`,
  `A crash reduces
your expensive computer
to a simple stone.`,
  `Yesterday it worked,
Today it is not working.
Windows is like that.`,
  `Three things are certain:
Death, taxes, and lost data.
Guess which has occurred.`,
  `Out of memory.
We wish to hold the whole sky,
But we never will.`,
  `Rather than a beep
Or a rude error message,
These words: “File not found.”`,
  `The Web site you seek
cannot be located but
endless more exist.`,
  `ABORTED effort:
Close all that you have.
You ask way too much.`,
  `With searching comes loss
and the presence of absence:
“My Novel” not found.`,
  `Windows NT crashed.
I am the Blue Screen of Death.
No one hears your screams.`,
  `Error messages
cannot completely convey.
We now know shared loss.`,
  `Everything is gone;
Your life's work has been destroyed.
Squeeze trigger (yes/no)?`,
  `Chaos reigns within.
Reflect, repent, and reboot.
Order shall return.`,
  `Login incorrect.
Only perfect spellers may
enter this system.`,
  `First snow, then silence.
This thousand dollar screen dies
so beautifully.`,
  `The Tao that is seen
Is not the true Tao, until
You bring fresh toner.`,
  `To have no errors
Would be life without meaning
No struggle, no joy`,
];

const randomRange = (rng) => {
  return Math.floor(Math.random() * rng);
};

const getHaiku = () => {
  return haikus[randomRange(haikus.length)].split("\n").join("<br/>");
};

const errorTitle = () => {
  if (randomRange(20) == 0) {
    return "エラー俳句メッセージ";
  } else {
    return "Haiku Error Messages";
  }
};

document.getElementsByClassName("message")[0].innerHTML = getHaiku();

const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
  document.getElementsByClassName("message")[0].innerHTML = getHaiku();
  // document.getElementsByClassName("top-tier")[0].innerHTML = errorTitle();
});
