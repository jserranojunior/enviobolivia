import{e as b,u as v,h as y,l as k,o as i,c,a as e,i as o,t as f,j as _,k as n,v as d,d as h,g as C}from"./index.dcbe4c01.js";const E={class:"context"},S={class:"flex items-center justify-center my-32"},B={class:"container mx-auto mt-8 p-8 bg-white text-black max-w-md rounded shadow-md"},N=e("h2",{class:"text-2xl font-bold mb-4"},"Cadastro",-1),V={key:0},U={key:0,class:"my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg",role:"alert"},D={class:"form-control"},F={class:"mb-4"},L=e("label",{for:"nome",class:"block text-gray-700 text-sm font-bold mb-2"},"Nome Completo",-1),P={class:"mb-4"},T=e("label",{for:"cadastroEmail",class:"block text-gray-700 text-sm font-bold mb-2"},"E-mail",-1),$={class:"mb-4"},M=e("label",{for:"telefone",class:"block text-gray-700 text-sm font-bold mb-2"},"Telefone",-1),R={class:"flex"},j={class:"dropdown w-auto max-w-xs"},z={tabindex:"0",class:"btn btn-sm btn-warning h-full"},A={tabindex:"0",class:"dropdown-content menu p-2 shadow bg-white rounded-box w-52"},I=e("a",null,[e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/33px-Flag_of_Brazil.svg.png"}),h(" +55 ")],-1),O=[I],q=e("a",null,[e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/33px-Flag_of_Bolivia.svg.png"}),h(" +591")],-1),G=[q],H={class:"w-full max-w-xs pl-2"},J={class:"mb-4"},K=e("label",{for:"dataNascimento",class:"block text-gray-700 text-sm font-bold mb-2"},"Data de Nascimento",-1),Q={class:"mb-4"},W=e("label",{for:"cadastroSenha",class:"block text-gray-700 text-sm font-bold mb-2"},"Senha",-1),X={class:"mb-4"},Y=e("label",{for:"confirmacaoSenha",class:"block text-gray-700 text-sm font-bold mb-2"},"Confirma\xE7\xE3o de Senha",-1),Z=e("div",{class:"mt-2 border-t"},null,-1),ee={class:"flex"},te=e("div",{class:"w-1/2 mx-1"},[e("a",{href:"/"},[e("div",{class:"w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 cursor-pointer"},"Acessar")])],-1),oe={class:"w-1/2 mx-1"},se=b({name:"Register",setup(x){let{register:t,router:m,auth:r}=v();function g(l){m.push({path:l})}function u(){t.Register().then(async l=>{l&&await w()})}async function w(){r.fields.email=t.fields.email,r.fields.password=t.fields.password,await r.Login().then(l=>{l&&g("/financeiro")})}return y(()=>{document.addEventListener("keyup",l=>{l.key=="Enter"&&u()}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("dataNascimento")})}),(l,s)=>{const p=k("maska");return i(),c("div",null,[e("div",E,[e("div",S,[e("div",B,[N,o(t)&&o(t).fields?(i(),c("span",V,[o(t).erro?(i(),c("div",U,f(o(t).erro),1)):_("",!0)])):_("",!0),e("form",D,[e("div",F,[L,n(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o(t).fields.name=a),type:"text",id:"nome",name:"nome",class:"w-full px-3 py-2 border rounded"},null,512),[[d,o(t).fields.name]])]),e("div",P,[T,n(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o(t).fields.email=a),type:"email",id:"cadastroEmail",name:"cadastroEmail",class:"w-full px-3 py-2 border rounded"},null,512),[[d,o(t).fields.email]])]),e("div",$,[M,e("div",R,[e("div",j,[e("label",z,f(o(t).phoneCode),1),e("ul",A,[e("li",{onClick:s[2]||(s[2]=a=>o(t).phoneCode="+55")},O),e("li",{onClick:s[3]||(s[3]=a=>o(t).phoneCode="+591")},G)])]),e("div",H,[n(e("input",{id:"cellphone","onUpdate:modelValue":s[4]||(s[4]=a=>o(t).fields.cellphone=a),type:"text",class:"w-full px-3 py-2 border rounded",placeholder:"Celular"},null,512),[[d,o(t).fields.cellphone],[p,"(##) #####-####"]])])])]),e("div",J,[K,n(e("input",{"onUpdate:modelValue":s[5]||(s[5]=a=>o(t).fields.dtnascimento=a),type:"text",id:"dataNascimento",name:"dataNascimento",class:"w-full px-3 py-2 border rounded",placeholder:"dd/mm/yyyy"},null,512),[[p,"##/##/####"],[d,o(t).fields.dtnascimento]])]),e("div",Q,[W,n(e("input",{"onUpdate:modelValue":s[6]||(s[6]=a=>o(t).fields.password=a),type:"password",id:"cadastroSenha",name:"cadastroSenha",class:"w-full px-3 py-2 border rounded"},null,512),[[d,o(t).fields.password]])]),e("div",X,[Y,n(e("input",{"onUpdate:modelValue":s[7]||(s[7]=a=>o(t).confirmPassword=a),type:"password",id:"confirmacaoSenha",name:"confirmacaoSenha",class:"w-full px-3 py-2 border rounded"},null,512),[[d,o(t).confirmPassword]])])]),Z,e("div",ee,[te,e("div",oe,[e("div",{class:"w-full bg-green-500 text-white p-3 rounded hover:bg-green-700 cursor-pointer",onClick:s[8]||(s[8]=a=>u())},"Cadastrar")])])])])])])}}}),le=b({name:"RegisterPage",setup(x){return(t,m)=>(i(),C(se))}});export{le as default};