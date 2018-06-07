import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, mergeMap, switchMap, tap } from 'rxjs/operators';
import { from,timer } from 'rxjs';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import '../../assets/ckplayer/ckplayer';

@Component({
  selector: 'app-bigdata',
  templateUrl: './bigdata.component.html',
  styleUrls: ['./bigdata.component.css'],
  animations: [
        trigger("signal",[
            state("hide", style({
                "width": 0,
                 "background-color": "green"
            })),
            state("show", style({
                "width": "100px",
                "background-color": "yellow"
            })),
            transition("*=>*",animate(500))
        ])
    ]
})
export class BigdataComponent implements OnInit {
  constructor(private http: HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  username: string = '';

  user: any;

  signal : string = 'show';

  ngOnInit() {


    // const source = timer(0, 5000);
// 输出: 0,1,2,3,4,5......
  // const subscribe = source.subscribe(val => console.log(val))
    this.getPolling();
    this.videoPlay();
    // const source = from (this.http.get(this.apiUrl))
    // const example = source.pipe(map(res => res));
    // const subscribe = example.subscribe(val => console.log(val));
  }
  getData(){
    from(this.http.get(this.apiUrl))
      .pipe(
        map(res => res)
    ).subscribe(data => console.log(data));
  }

  getPolling(){
    const self = this;
    // timer(0, 1000)
    // .pipe(
    //   tap(_ => console.log('NEW WINDOW!'))
    // ).subscribe()
  }

  hide() {
    this.signal = this.signal == "hide"?"show":"hide";
  }

  show() {
      this.signal = "show"
  }

  videoPlay(){
    var videoObject = {
        container: '.video',//“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
        autoplay: false,//自动播放
        live: true,
        poster: 'material/poster.jpg',
        video:'rtmp://39.104.76.50:89/md/02'//视频地址
        // video:'rtmp://live.hkstv.hk.lxdns.com/live/hks'//视频地址
        // video:'rtsp://admin:12345@111.3.57.50:554/Streaming/Channels/101'
        // video:'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'//视频地址
    };
    const player = new ckplayer(videoObject);
  }
}
