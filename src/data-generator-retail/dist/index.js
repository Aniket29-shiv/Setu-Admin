var H=Object.create;var w=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var s=(t,r)=>w(t,"name",{value:r,configurable:!0});var I=(t,r)=>{for(var e in r)w(t,e,{get:r[e],enumerable:!0})},P=(t,r,e,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of j(r))!N.call(t,o)&&o!==e&&w(t,o,{get:()=>r[o],enumerable:!(a=G(r,o))||a.enumerable});return t};var q=(t,r,e)=>(e=t!=null?H(z(t)):{},P(r||!t||!t.__esModule?w(e,"default",{value:t,enumerable:!0}):e,t)),J=t=>P(w({},"__esModule",{value:!0}),t);var U={};I(U,{default:()=>K});module.exports=J(U);var c=require("faker/locale/en");var B=q(require("faker/locale/en")),p=s((t,r)=>B.default.random.arrayElement(t.reduce((e,a,o)=>e.concat(new Array(r[o]).fill(a)),[])),"weightedArrayElement"),l=s(t=>B.default.random.number(99)<t,"weightedBoolean"),f=s((t,r)=>{let e=t instanceof Date?t.getTime():Date.now()-15768e7,o=(r instanceof Date?r.getTime():Date.now())-e,d=B.default.random.number({max:o}),n=Math.sqrt(d/o)*o;return new Date(e+n)},"randomDate"),y=s((t,r)=>parseFloat(B.default.random.number({min:t,max:r,precision:.01}).toFixed(2)),"randomFloat");var F=s((t,{serializeDate:r})=>{let a=0;return Array.from(Array(900).keys()).map(o=>{let d=f(),n=f(d),i=l(25)&&a<223,u=c.name.firstName(),m=c.name.lastName(),g=c.internet.email(u,m),h=i?c.date.past(60):null,x=i?"https://marmelab.com/posters/avatar-"+a+".jpeg":void 0;return i&&a++,{id:o,first_name:u,last_name:m,email:g,address:i?c.address.streetAddress():null,zipcode:i?c.address.zipCode():null,city:i?c.address.city():null,stateAbbr:i?c.address.stateAbbr():null,avatar:x,birthday:r&&h?h.toISOString():h,first_seen:r?d.toISOString():d,last_seen:r?n.toISOString():n,has_ordered:i,latest_purchase:null,has_newsletter:i?l(30):!0,groups:[],nb_commands:0,total_spent:0}})},"default");var E=s(()=>[{id:0,name:"animals"},{id:1,name:"beard"},{id:2,name:"business"},{id:3,name:"cars"},{id:4,name:"city"},{id:5,name:"flowers"},{id:6,name:"food"},{id:7,name:"nature"},{id:8,name:"people"},{id:9,name:"sports"},{id:10,name:"tech"},{id:11,name:"travel"},{id:12,name:"water"}],"default");var b=require("faker/locale/en");var Y={animals:["Cat Nose","Dog Grass","Brown Cow","Leopard Road","Sad Dog","Pelican Pier","Green Birds","Concrete Seaguls","Hiding Seagul","Sand Caravan"],beard:["Black Auburn","Basket Beard","Handlebar Moustache","White Beard","Sailor Man","Natural Beard","Yeard Phone","Braid Beard","Terminal Black","Short Boxed"],business:["Corporate Prop","Office Chairs","White Clock","Work Suit","Suit & Tie","Shake Hands","Building Sky","Yellow Pad","Work Devices","Hands Clap","Work Meeting"],cars:["Old Combi","Asian Plates","Pedestrian Crossing","Farmer Boy","Make Over","Sports Sunset","Desert Jeep","Highway Bridge","Race Stickers","White Deluxe"],city:["Bridge Lights","Color Dots","Cloud Suspension","Paved Street","Blue Bay","Wooden Door","Concrete Angles","London Lights","Fort Point","Rainy Glass"],flowers:["Apricot Tree","Orange Rose","Purple Petunia","Water Lily","White Peony","Poppy Field","Blue Flax","Love Roses","California Poppy","Dalhia Colors"],food:["Fuzzy Forks","Stamp Mug","Two Expressos","Red Latte","Black Grapes","Forgotten Strawberries","Close Steam","Brewing Tea","Red Onions","Dark Honey"],nature:["Distant Mountains","Fog Pond","Sand Rocks","Pebble Shore","Eroded Fractals","Water Fall","Drif Wood","Dirt Track","Green Grass","Yellow Lichen"],people:["Crossing Alone","Budding Grove","Light Hair","Black & White","Rock Concert","Meeting Bench","Son & Lumi\xE8re","Running Boy","Dining Hall","Tunnel People"],sports:["Feather Ball","Wall Skate","Kick Flip","Down Hill","Baseball Night","Touch Line","Alone Jogger","Green Basket","Mud Hug","Metal Cycle"],tech:["Black Screen","Phone Call","Tablet & Phone","No Battery","Phone Book","Camera Parts","Fuzzy Phone","Music & Light","Eye Rest","Aligned Parts"],travel:["Distant Jet","Foggy Beach","White Lime","Mysterious Cloud","Mountain Top","Light House","Gray Day","Desert Walkway","Train Track","Plane Trees"],water:["Fresh Stream","Reed Line","Mud Tracks","Beach Gazebo","Calm Sea","Early Bath","Aerial Coast","Canal Street","Artificial Beach","Rainy Day"]},T=s(t=>{let r=0;return t.categories.reduce((e,a)=>[...e,...Array.from(Array(10).keys()).map(o=>{let d=y(10,40),n=y(10,40);return{id:r++,category_id:a.id,reference:Y[a.name][o],width:d,height:n,price:y(d*n/20,d*n/15),thumbnail:"https://marmelab.com/posters/"+a.name+"-"+(o+1)+".jpeg",image:"https://marmelab.com/posters/"+a.name+"-"+(o+1)+".jpeg",description:b.lorem.paragraph(),stock:l(10)?0:b.random.number({min:0,max:150}),sales:0}})],[])},"default");var _=require("faker/locale/en"),S=require("date-fns");var M=s((t,{serializeDate:r})=>{let e=new Date,a=(0,S.subDays)(e,30),o=t.customers.filter(d=>d.has_ordered);return Array.from(Array(600).keys()).map(d=>{let n=p([1,2,3,4,5,6,7,8,9,10],[30,20,5,2,1,1,1,1,1,1]),i=Array.from(Array(n).keys()).map(()=>({product_id:_.random.number({min:0,max:10*13-1}),quantity:p([1,2,3,4,5],[10,5,3,2,1])})),u=i.reduce((W,v)=>W+t.products[v.product_id].price*v.quantity,0),m=y(3,8),g=_.random.arrayElement([.12,.17,.2]),h=parseFloat(((u+m)*g).toFixed(2)),x=_.random.arrayElement(o),C=f(x.first_seen,x.last_seen),R=(0,S.isAfter)(C,a)&&_.random.boolean()?"ordered":p(["delivered","cancelled"],[10,1]);return{id:d,reference:_.random.alphaNumeric(6).toUpperCase(),date:r?C.toISOString():C,customer_id:x.id,basket:i,total_ex_taxes:u,delivery_fees:m,tax_rate:g,taxes:h,total:parseFloat((u+m+h).toFixed(2)),status:R,returned:R==="delivered"?l(10):!1}})},"default");var L=s(t=>{let r=0;return t.commands.filter(e=>e.status!=="delivered").sort((e,a)=>new Date(e.date)-new Date(a.date)).map(e=>({id:r++,date:e.date,command_id:e.id,customer_id:e.customer_id,total_ex_taxes:e.total_ex_taxes,delivery_fees:e.delivery_fees,tax_rate:e.tax_rate,taxes:e.taxes,total:e.total}))},"default");var k=require("faker/locale/en"),D=require("date-fns");var O=s((t,{serializeDate:r})=>{let e=new Date,a=(0,D.subDays)(e,30),o=0,d=t.customers.filter(n=>n.has_ordered).filter(()=>l(60)).map(n=>n.id);return t.commands.filter(n=>d.indexOf(n.customer_id)!==-1).reduce((n,i)=>[...n,...i.basket.filter(()=>l(40)).map(u=>{let m=f(i.date),g=(0,D.isAfter)(a,m)?p(["accepted","rejected"],[3,1]):p(["pending","accepted","rejected"],[5,3,1]);return{id:o++,date:r?m.toISOString():m,status:g,command_id:i.id,product_id:u.product_id,customer_id:i.customer_id,rating:k.random.number({min:1,max:5}),comment:Array.apply(null,Array(k.random.number({min:1,max:5}))).map(()=>k.lorem.sentences()).join(`
 \r`)}})],[])},"default");function A(t){t.commands.forEach(e=>{let a=t.customers[e.customer_id];(!a.latest_purchase||a.latest_purchase<e.date)&&(a.latest_purchase=e.date),a.total_spent+=e.total,a.nb_commands++}),t.commands.forEach(e=>{e.basket.forEach(a=>{t.products[a.product_id].sales+=a.quantity})});let r=t.commands.reduce((e,a)=>(e[a.customer_id]||(e[a.customer_id]={nbProducts:0}),e[a.customer_id].nbProducts+=a.basket.length,e),{});Object.keys(r).forEach(e=>{r[e].nbProducts>10&&t.customers[e].groups.push("collector")}),t.customers.filter(e=>e.nb_commands===1).forEach(e=>e.groups.push("ordered_once")),t.customers.filter(e=>e.total_spent>1500).forEach(e=>e.groups.push("compulsive")),t.customers.filter(()=>l(20)).forEach(e=>e.groups.push("regular")),t.commands.filter(e=>e.returned).forEach(e=>{t.customers[e.customer_id].groups.indexOf("returns")===-1&&t.customers[e.customer_id].groups.push("returns")}),t.reviews.forEach(e=>{let a=t.customers[e.customer_id];a.groups.indexOf("reviewer")===-1&&a.groups.push("reviewer")}),t.settings=[{id:1,configuration:{url:"http://posters-galore.com/",mail:{sender:"julio@posters-galore.com",transport:{service:"fakemail",auth:{user:"fake@mail.com",pass:"f00b@r"}}},file_type_whiltelist:["txt","doc","docx","xls","xlsx","pdf","png","jpg"]}}]}s(A,"default");var K=s((t={serializeDate:!0})=>{let r={};return r.customers=F(r,t),r.categories=E(),r.products=T(r),r.commands=M(r,t),r.invoices=L(r),r.reviews=O(r,t),A(r),r},"default");0&&(module.exports={});
//# sourceMappingURL=index.js.map