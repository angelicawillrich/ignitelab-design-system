import{j as x}from"./jsx-runtime-CkxqCPlQ.js";import{S as H}from"./index-DxjvaFr2.js";import{c as z}from"./clsx-B-dksMZM.js";import"./index-DJO9vBfz.js";function b({size:t="md",children:C,asChild:y,className:S}){const T=y?H:"h2";return x.jsx(T,{className:z("text-gray-100 font-bold font-sans",{"text-lg":t==="sm","text-xl":t==="md","text-2xl":t==="lg"},S),children:C})}b.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Heading",component:b,args:{children:"Lorem ipsum",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},asChild:{table:{disable:!0}}}},e={},s={args:{size:"sm"}},r={args:{size:"lg"}},a={args:{asChild:!0,children:x.jsx("h1",{children:"Heading with h1"})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["Default","Small","Large","CustomComponent"];export{a as CustomComponent,e as Default,r as Large,s as Small,w as __namedExportsOrder,N as default};
