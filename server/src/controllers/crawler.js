const configs = require('../config/config');
const cheerio = require('cheerio');
const http = require('http');

/*
* *******************************************************
 [{
   name: '',
   subOptions: {
     name: '',
     type: '',
   },
 }]
* *******************************************************
* */

function Crawler() {

}

function filterChapters(html) {
  const $ = cheerio.load(html);

  const list = $('.dtui-treelist-parent .ecdoc-api-tree-text-prop').text();

  $chapters.each(function (item) {
    var $chapter = $(this);
    var chapterTitle = $chapter.find('h3').text().trim();
    var videos = $chapter.find('.video').children('li');
    var chapterData = {
      chapterTitle: chapterTitle,
      videos: [],
    };

    videos.each(function (item) {
      var $video = $(this).find('.J-media-item');
      var videoTitle = $video.text().split('(')[0].trim();
      var id = $video.attr('href').split('video/')[1];

      chapterData.videos.push({
        title: videoTitle,
        id: id,
      });
    });

    courseData.videos.push(chapterData);
  });

  return courseData;
}

Crawler.prototype.start = function () {
  http.get(configs.url, (res) => {
    let html = '';

    res.on('data', (data) => {
      html += data;
    });

    res.on('end', () => {
      console.log(html);
      const options = filterChapters(html);
    })
  }).on('error', (err) => {
      console.log(err);
  });
};

module.exports = Crawler ;