import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
count = 1;
  isLiked = false

  likeButton = () => {
    if(this.isLiked) {
      this.count--
    console.log('no like')
    }

    else
    this.count++
  }
  constructor(private _post:PostService) { }

  ngOnInit(): void {
  }

  newPost(post: NgForm){
    if(post.valid){
      this._post.newPost(post.value).subscribe(
        data => console.log(data),
        (e) => console.log(e.message),
        () => console.log ("hello")
        )
    }
  }
}
