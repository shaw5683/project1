//浏览器缓存函数封装
const storage='todos-vuejs';
export default{
	fetch: function(){
		return JSON.parse(window.localStorage.getItem(storage)||'[]')
	},
	save:function(items){
		window.localStorage.setItem(storage,JSON.stringify(items))
	}
}