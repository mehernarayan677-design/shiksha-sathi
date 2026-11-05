const root=document.getElementById('classes');
for(let n=1;n<=5;n++){
  const b=document.createElement('button');
  b.className='class-card';
  b.textContent=`Class ${n}`;
  b.addEventListener('click',()=>alert(`Class ${n}\n\nSubjects and lessons will be added here.`));
  root.appendChild(b);
}