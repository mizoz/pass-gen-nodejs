#!/usr/bin/env node
/** Password generator */
const crypto=require('crypto');
const a=process.argv.slice(2);
let l=16,s=true;
for(const x of a){if(x.startsWith('--length='))l=parseInt(x.split('=')[1]);else if(x==='--no-special')s=false;}
let C='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
if(s)C+='!@#$%^&*()_+-=[]{}|;:,.<>?';
let p='';
for(let i=0;i<l;i++)p+=C[crypto.randomBytes(1)[0]%C.length];
console.log(p);
