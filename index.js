app.get("/algeria/hta_all_in_1", function(req, res) {
    fetch("https://token.kube.easybroadcast.fr/authtoken?url=http://apphta.easybroadcast.fr/apphta", {method: "GET", headers: {"Referer": "https://htatv.com/"}})
        .then(response => response.text())
        .then(result => {
            let channel = req.query.channel;
            if (!channel) {
                res.send("No channel has been given.")
            } else {
                res.redirect('https://cdn02.hta.dz/abr_htatv/' + channel + '/playlist.m3u8' + result)
            }
        })
});
