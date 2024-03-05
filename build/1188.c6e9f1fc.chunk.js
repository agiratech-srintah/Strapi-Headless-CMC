"use strict";(self.webpackChunkstrapi_test=self.webpackChunkstrapi_test||[]).push([[1188],{1188:(G,L,s)=>{s.d(L,{ProtectedEditPage:()=>X});var t=s(92132),I=s(21272),E=s(94061),M=s(83997),m=s(30893),h=s(85963),B=s(90151),A=s(68074),R=s(7537),g=s(5287),U=s(38413),c=s(55356),T=s(4198),W=s(21610),o=s(2291),K=s(46270),f=s(61535),p=s(54894),j=s(17703),Q=s(71389),x=s(12083),e=s(93805),Y=s(63209),Z=s(81639),ns=s(15126),is=s(63299),Es=s(67014),rs=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Os=s(5409),Ds=s(74930),ms=s(2600),hs=s(48940),As=s(41286),Rs=s(51187),gs=s(56336),vs=s(39404),Cs=s(58692),Ls=s(54257),Is=s(501),Bs=s(57646),Us=s(23120),cs=s(44414),Ts=s(25962),Ws=s(14664),Ks=s(42588),fs=s(90325),js=s(62785),xs=s(87443),us=s(41032),ys=s(22957),ps=s(93179),Ss=s(73055),Fs=s(15747),Ns=s(85306),Vs=s(77965),zs=s(26509),Gs=s(84624),Qs=s(71210),Ys=s(32058),Zs=s(81185),$s=s(82261),Hs=s(412),Js=s(94710);const $=({disabled:n,role:_,values:O,errors:a,onChange:r,onBlur:v})=>{const{formatMessage:i}=(0,p.A)();return(0,t.jsx)(E.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(E.a,{children:[(0,t.jsx)(E.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:_?_.name:i({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:_?_.description:i({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:i({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:_.usersCount})})]}),(0,t.jsxs)(B.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.k,{disabled:n,name:"name",error:a.name&&i({id:a.name}),label:i({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:v,required:!0,value:O.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.T,{disabled:n,label:i({id:"global.description",defaultMessage:"Description"}),id:"description",error:a.name&&i({id:a.name}),onChange:r,onBlur:v,children:O.description||""})})]})]})})},H=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),J=()=>{const n=(0,o.hN)(),{formatMessage:_}=(0,p.A)(),a=(0,j.W5)("/settings/roles/:id")?.params.id,r=I.useRef(null),{lockApp:v,unlockApp:i}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:F}=(0,o.wq)(),{isLoading:k,data:N}=(0,e.A)({role:a??""}),{roles:w,isLoading:V,refetch:q}=(0,Y.u)({id:a},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:a},{skip:!a,refetchOnMountOrArgChange:!0}),[as]=(0,e.G)(),[_s]=(0,e.E)();if(!a)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(u,C)=>{try{v();const{permissionsToSend:D,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await as({id:a,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?C.setErrors(F(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&D){const l=await _s({id:d.data.id,permissions:D});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?C.setErrors(F(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{i()}},z=!V&&P.code==="strapi-super-admin";return(0,t.jsxs)(U.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:H,validateOnChange:!1,children:({handleSubmit:u,values:C,errors:D,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(c.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})}),title:_({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.N,{as:Q.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)($,{disabled:z,errors:D,values:C,onChange:y,onBlur:d,role:P}),!k&&!V&&!ts&&N?(0,t.jsx)(E.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(Z.P,{isFormDisabled:z,permissions:ss,ref:r,layout:N})}):(0,t.jsx)(E.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},X=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:_,allowedActions:{canRead:O,canUpdate:a}}=(0,o.ec)(n);return _?(0,t.jsx)(o.Bl,{}):!O&&!a?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(J,{})}},63209:(G,L,s)=>{s.d(L,{u:()=>m});var t=s(21272),I=s(2291),E=s(54894),M=s(93805);const m=(h={},B)=>{const{locale:A}=(0,E.A)(),R=(0,I.QM)(A,{sensitivity:"base"}),{data:g,error:U,isError:c,isLoading:T,refetch:W}=(0,M.z)(h,B);return{roles:t.useMemo(()=>[...g??[]].sort((K,f)=>R.compare(K.name,f.name)),[g,R]),error:U,isError:c,isLoading:T,refetch:W}}}}]);
