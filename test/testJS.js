//Call back functions 

function taskOne (callback) {
    setTimeout(function() {
        console.log('test One');
        callback();
    }, 5000);

}

function taskTwo () {
    console.log('test Two')
}

taskOne(taskTwo);



