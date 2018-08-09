import { configs } from '../config/config';
import * as cheerio from 'cheerio';

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
let options = [];

class Crawler {
  constructor() {

  }

  filterChapters(html) {
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
}

export { Crawler };