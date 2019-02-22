import{DataSource as e,RectPath as t,Shape as r,Component as a}from"@hatiolab/things-scene";import s from"xlsx";var n="data:image/png;base64,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";const i={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"src",name:"src",placeholder:"Excel File URL"}]};async function o(e){const t=await fetch(e,{method:"GET",headers:{"Content-Type":"application/xlsx"},credentials:"include"}),r=s.read(await t.arrayBuffer(),{type:"array"});var a={};return r.SheetNames.forEach(e=>{var t=s.utils.sheet_to_json(r.Sheets[e]);t.length&&(a[e]=t)}),console.log("result",a),a}class l extends(e(t(r))){static get image(){return l._image||(l._image=new Image,l._image.src=n),l._image}dispose(){super.dispose()}ready(){const{src:e}=this.state;e&&o(e).then(e=>{this.setState("data",e)})}render(e){var{left:t,top:r,width:a,height:s}=this.bounds;e.beginPath(),e.drawImage(l.image,t,r,a,s)}get nature(){return i}get src(){return this._src}set src(e){this._src=e,e&&o(e).then(e=>{this.setState("data",e)})}ondropfile(e,t){for(let r=0;r<e.length;r++)if(/\.xlsx?$/.test(e[r].name))return void(this.src=t[r])}}a.register("excel",l);export default[l];
//# sourceMappingURL=things-scene-excel.mjs.map
