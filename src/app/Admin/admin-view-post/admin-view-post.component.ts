import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/update-post.model';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css'],
  encapsulation: ViewEncapsulation.None  
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

post: Post | undefined;


  ngOnInit():  void {
this.route.paramMap.subscribe(
  params => {
    const id = params.get('id');

  if (id) {
    this.postService.getPostById(id)
    .subscribe (
      response => {
        this.post = response;
    }
  
);
  }
  }

);
}

  onSubmit(): void {

const updatePostRequest: UpdatePostRequest = {
 author: this.post?.author,
 content: this.post?.content,
featuredImageUrl: this.post?.featuredImageUrl,
publishDate: this.post?.publishDate,
 updatedDate: this.post?.updatedDate,
 visible: this.post?.visible,
 summary: this.post?.summary,
 title: this.post?.title,
urlHandle: this.post?.urlHandle
  }


this.postService.updatePost(this.post?.id, updatePostRequest)
.subscribe(
  response => {
console.log(response);
alert('Success');
  }
);
  }

deletePost(): void {
  this.postService.deletePost(this.post?.id)
.subscribe( 
  response => {
    alert('Deleted successfully')
  }
)
}



}

