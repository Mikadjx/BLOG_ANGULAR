import { Component, OnInit } from '@angular/core';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { PostService } from 'src/app/services/post.service';
import { catchError } from 'rxjs';



@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

constructor(private postService: PostService){}

post:AddPostRequest = {

title:'',
content:'',
summary:'',
urlHandle:'',
featuredImageUrl:'',
visible: true,
author:'',
publishDate:'',
updatedDate:''

}
ngOnInit() : void {
}
onSubmit() : void {
  this.postService.addPost(this.post)
  .subscribe(
    response => {
      alert('Success');
    }
  );
}
}

