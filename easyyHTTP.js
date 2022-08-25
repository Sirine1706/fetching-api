
class easyHTTP{ 
    constructor(){
      this.http = new XMLHttpRequest()
    }
  }
  
  // Make an HTTP GET Request
  class get extends easyHTTP{
    constructor(url,callback){
       super(http).open("GET",url,true)
       let self = this 
       this.http.onload = function(){
        if (self.http.status === 200) {
          callback(null, self.http.responseText)
        } else {
          callback("Error:" + self.http.status)
        }
      }
      this.http.send()
    }
   
  }
  
  // Make an HTTP POST Request
  class post extends easyHTTP{
    constructor(url,data,callback){
      super(http).open("POST",url, true)
      this.http.setRequestHeader("content-type","application/json")
  
      let self = this 
      this.http.onload = function(){
          callback(null, self.http.responseText)
      }
      this.http.send(JSON.stringify(data))
    }
  }
  
  // Make an HTTP PUT Request
  class put extends easyHTTP{
    constructor(url,callback,data){
      super(http).open("PUT",url,true)
      this.http.setRequestHeader("content-type","application/json")
  
      let  self = this
      this.http.onload = function(){
        callback(null, self.http.responseText)
      }
      this.http.send(JSON.stringify(data))
    }
  }
  // Make an HTTP DELETE Request
  class Delete extends easyHTTP{
    constructor(url,callback){
      super(http).open("DELETE",url,true)
      let  self = this
      this.http.onload = function(){
        if (self.http.status === 200) {
          callback(null, 'Post Deleted succ')
        } else {
          callback("Error :" + self.http.status)
        }
      }
      this.http.send()
    }
  }