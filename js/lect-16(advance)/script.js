let pname = document.getElementById('postname');
let comment = document.getElementById('comments');
let editId=null;

document.getElementById('frm1').addEventListener('submit',(e)=>{
    e.preventDefault();
    let postObj = {
        postname:pname.value,
        comment:comment.value

    }
   

    if(localStorage.getItem('posts')){
        let oldArray = localStorage.getItem('posts');
        oldArray = JSON.parse(oldArray);
       
       if(editId != null){
           oldArray.splice(editId,1,postObj);
           editId=null
        }
       else{
           oldArray.push(postObj);
       }
         localStorage.setItem('posts',JSON.stringify(oldArray));
        
    }
    else{
         localStorage.setItem('posts',JSON.stringify([postObj]));
    }
    pname.value="";
    comment.value=""
     getPost();
    
    
})

function getPost(){
    let str="";
    if(localStorage.getItem('posts')){
        let postArray = localStorage.getItem('posts');
        postArray = JSON.parse(postArray);
        
        for(i=0;i<postArray.length;i++){
            str+=`
             <tr>
                            <td>${i+1}</td>
                            <td>${postArray[i].postname}</td>
                            <td>${postArray[i].comment}</td>
                            <td>
                                <button class="btn btn-sm btn-warning" onclick="editTodo(${i})">
                                    Edit
                                </button>

                                <button class="btn btn-sm btn-danger" onclick="delTodo(${i})">
                                    Delete
                                </button>
                            </td>
                        </tr>
            `
        }
    }
    else{
         str+=`
           <tr>
                            <td colspan='4'>No Records Found</td>
                           
                        </tr>
         `
    }
    document.getElementById('padata').innerHTML=str;

}

function editTodo(id){
    
       let oldArray = localStorage.getItem('posts');
        oldArray = JSON.parse(oldArray);
        pname.value=oldArray[id].postname;
        comment.value=oldArray[id].comment;
        editId=id;
}
function delTodo(id){
      let oldArray = localStorage.getItem('posts');
        oldArray = JSON.parse(oldArray);
        oldArray.splice(id,1);
       localStorage.setItem('posts',JSON.stringify(oldArray));
        getPost();
}

window.onload= getPost()