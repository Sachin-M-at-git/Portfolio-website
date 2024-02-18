//text anim
var words = ['Frontend Developer', 'Backend Developer', 'Android App Developer'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('#job').text(part+"|");
  },speed);
};

wordflick();

//progress bar

function updateProgressBar(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const sp =  scrollTop / (scrollHeight - window.innerHeight) * 100;
  const scrollPercent = sp + '%';
  document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  
  console.log(scrollPercent);

  currentTab(sp);
}

document.addEventListener('scroll', updateProgressBar);

function currentTab(sp) {
  var element;
  if(sp < 24.53 || sp == 0) {
    $( '.tab' ).removeClass( ["active","pt-lg-1","fs-3","fs-4"] ).addClass( "fs-4" );
    $( 'nav div a[href="#hero"]' ).removeClass( "fs-4" ).addClass( ["active","pt-lg-1","fs-3"] );
  } else if(sp > 24.53 &&  sp < 56.63) {
    $( '.tab' ).removeClass( ["active","pt-lg-1","fs-3","fs-4"] ).addClass( "fs-4" );
    $( 'nav div a[href="#about"]' ).removeClass( "fs-4" ).addClass( ["active","pt-lg-1","fs-3"] );
  } else if(sp > 56.63 &&  sp < 83.35) {
    $( '.tab' ).removeClass( ["active","pt-lg-1","fs-3","fs-4"] ).addClass( "fs-4" );
    $( 'nav div a[href="#skills"]' ).removeClass( "fs-4" ).addClass( ["active","pt-lg-1","fs-3"] );
  } else if(sp > 83.35) {
    $( '.tab' ).removeClass( ["active","pt-lg-1","fs-3","fs-4"] ).addClass( "fs-4" );
    $( 'nav div a[href="#education"]' ).removeClass( "fs-4" ).addClass( ["active","pt-lg-1","fs-3"] );
  }
}