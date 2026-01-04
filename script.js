function rate(n){
  document.querySelectorAll('.stars span').forEach((s,i)=>{
    s.style.color = i < n ? 'gold' : 'gray';
  });
  document.getElementById('out').innerText = `Rating: ${n}/5`;
}
