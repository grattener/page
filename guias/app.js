const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const views = $$('.view');
const drawer = $('#drawer'), scrim = $('#scrim'), menuButton = $('#menuButton');
function openMenu(open){drawer.classList.toggle('open',open);scrim.classList.toggle('show',open);drawer.setAttribute('aria-hidden',String(!open));menuButton.setAttribute('aria-expanded',String(open));}
menuButton.addEventListener('click',()=>openMenu(true));$('#closeMenu').addEventListener('click',()=>openMenu(false));scrim.addEventListener('click',()=>openMenu(false));
function showView(id){views.forEach(v=>v.classList.toggle('active',v.id===id));openMenu(false);window.scrollTo({top:0,behavior:'smooth'});if(id==='progreso')renderStats();if(id==='quiz'&&!quizStarted)renderQuestion();if(id==='buscador')$('#searchInput').focus({preventScroll:true});}
$$('[data-view]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.view)));
const quiz = [
 {q:'¿Qué debes revisar primero para determinar si una conducta encuadra en un delito?',note:'Analiza los hechos y la norma aplicable.',a:['La disposición legal aplicable y los hechos','Únicamente la intención de la persona','La sanción más alta del código','La condición económica del acusado'],correct:0,why:'Primero se comparan los hechos con los elementos que exige la disposición legal aplicable.'},
 {q:'¿Qué elemento ayuda a distinguir el fraude de otras figuras patrimoniales?',note:'Piensa en la forma en que se obtiene el beneficio.',a:['La existencia de un vehículo','El engaño o aprovechamiento de un error, según la ley','Que siempre exista violencia física','Que el bien sea inmueble'],correct:1,why:'El engaño o aprovechamiento de un error es central en la descripción general del fraude; revisa los requisitos concretos del código.'},
 {q:'Para analizar un posible abuso de confianza, ¿qué dato suele ser especialmente relevante?',note:'Considera cómo llegó el bien a manos de la persona.',a:['El color del objeto','La hora exacta del día','Cómo se recibió el bien y qué facultades se tenían sobre él','La profesión de la persona afectada'],correct:2,why:'La relación previa con el bien y los límites de la entrega ayudan a distinguir esta figura; verifica siempre la norma aplicable.'},
 {q:'¿Cuál es una buena manera de estudiar los verbos rectores?',note:'No basta con aprenderse una lista aislada.',a:['Memorizar palabras sin leer el artículo','Identificarlos en el texto legal y relacionarlos con los hechos','Usar la definición de otro estado sin verificar','Omitirlos si el caso parece obvio'],correct:1,why:'Los verbos rectores describen la conducta que la norma contempla. Deben estudiarse en el artículo correspondiente.'},
 {q:'Si un caso parece encajar en dos delitos, ¿qué conviene hacer?',note:'Evita decidir solo por intuición.',a:['Elegir automáticamente el delito más grave','Ignorar los hechos que no encajan','Comparar los elementos legales de ambas figuras con los hechos','Buscar únicamente una respuesta en redes sociales'],correct:2,why:'La comparación sistemática de los elementos legales y los hechos permite justificar el análisis.'}
];
let qIndex=0,selected=null,answered=false,quizStarted=false,score=0;
let stats=JSON.parse(localStorage.getItem('derechoStudyStats')||'{"answered":0,"correct":0,"cards":0}');
function saveStats(){localStorage.setItem('derechoStudyStats',JSON.stringify(stats));}
function renderQuestion(){
 quizStarted=true;selected=null;answered=false;$('#quizFeedback').textContent='';$('#nextQuestion').disabled=true;$('#nextQuestion').classList.remove('hidden');$('#restartQuiz').classList.add('hidden');
 if(qIndex>=quiz.length){$('#quizArea').innerHTML=`<div class="content-card center"><h2>¡Terminaste!</h2><p>Tu resultado fue de <strong>${score} de ${quiz.length}</strong> respuestas correctas.</p><p>Repasa los temas que te hayan costado trabajo y vuelve a intentarlo.</p></div>`;$('#quizProgress').style.width='100%';$('#questionCount').textContent='Cuestionario terminado';$('#scoreLabel').textContent=`Resultado: ${score}/${quiz.length}`;$('#nextQuestion').classList.add('hidden');$('#restartQuiz').classList.remove('hidden');return;}
 const item=quiz[qIndex];$('#questionCount').textContent=`Pregunta ${qIndex+1} de ${quiz.length}`;$('#scoreLabel').textContent=`Aciertos: ${score}`;$('#quizProgress').style.width=`${qIndex/quiz.length*100}%`;
 $('#quizArea').innerHTML=`<p class="question">${item.q}</p><p class="question-note">${item.note}</p><div class="answers">${item.a.map((a,i)=>`<button class="answer" data-answer="${i}"><span class="letter"></span><span><b>${String.fromCharCode(65+i)}.</b> ${a}</span></button>`).join('')}</div>`;
 $$('.answer').forEach(b=>b.addEventListener('click',()=>chooseAnswer(Number(b.dataset.answer))));
}
function chooseAnswer(i){if(answered)return;answered=true;selected=i;const item=quiz[qIndex];stats.answered++;if(i===item.correct){score++;stats.correct++;}saveStats();$$('.answer').forEach((b,j)=>{b.disabled=true;if(j===item.correct)b.classList.add('correct');if(j===i&&i!==item.correct)b.classList.add('wrong');});$('#quizFeedback').textContent=(i===item.correct?'¡Correcto! ':'No exactamente. ')+item.why;$('#nextQuestion').disabled=false;$('#nextQuestion').textContent=qIndex===quiz.length-1?'Ver resultado ›':'Siguiente pregunta ›';$('#scoreLabel').textContent=`Aciertos: ${score}`;}
$('#nextQuestion').addEventListener('click',()=>{if(!answered)return;qIndex++;renderQuestion();});$('#restartQuiz').addEventListener('click',()=>{qIndex=0;score=0;quizStarted=false;renderQuestion();});
const cards=[
 ['¿Qué debes identificar al analizar un delito?','Los hechos relevantes y los elementos que exige la disposición legal aplicable.'],
 ['¿Qué es un verbo rector?','La palabra o expresión que describe la conducta central contemplada en la norma penal.'],
 ['¿Qué caracteriza generalmente al robo?','El apoderamiento de una cosa mueble ajena sin derecho ni consentimiento, conforme a la definición legal aplicable.'],
 ['¿Qué elemento suele relacionarse con el fraude?','El engaño o aprovechamiento de un error para obtener un beneficio, según la legislación aplicable.'],
 ['¿Qué debes revisar en el abuso de confianza?','Cómo se recibió el bien y si la disposición posterior excedió las facultades concedidas.'],
 ['¿Por qué importa la jurisdicción?','Porque el tipo penal y sus requisitos pueden variar entre el código estatal y el federal.']
];
let cardIndex=0,flipped=false;
function renderCard(){const c=cards[cardIndex];$('#cardNumber').textContent=`${cardIndex+1} / ${cards.length}`;$('#cardText').textContent=flipped?c[1]:c[0];$('#cardHint').textContent=flipped?'Toca para volver a la pregunta':'Toca para ver la respuesta';$('#flashcard').classList.toggle('flipped',flipped);$('#dots').innerHTML=cards.map((_,i)=>`<span class="${i===cardIndex?'active':''}"></span>`).join('');}
$('#flashcard').addEventListener('click',()=>{flipped=!flipped;if(flipped){stats.cards++;saveStats();}renderCard();});$('#prevCard').addEventListener('click',()=>{cardIndex=(cardIndex+cards.length-1)%cards.length;flipped=false;renderCard();});$('#nextCard').addEventListener('click',()=>{cardIndex=(cardIndex+1)%cards.length;flipped=false;renderCard();});
const searchable=[
 ['Resumen general','Los delitos patrimoniales afectan bienes o intereses económicos. Es importante comparar los elementos legales de cada figura.','resumen'],
 ['Robo','Apoderamiento de una cosa mueble ajena; verifica los requisitos exactos del Código Penal aplicable.','resumen'],
 ['Fraude','Engaño o aprovechamiento de un error para obtener un beneficio, conforme a la ley aplicable.','resumen'],
 ['Abuso de confianza','Importa cómo se recibió el bien y qué facultades existían para disponer de él.','resumen'],
 ['Conducta','Comportamiento que describe la norma penal.','temas'],
 ['Objeto material','Persona o cosa sobre la que recae directamente la conducta.','temas'],
 ['Engaño o error','Conceptos relevantes para analizar la figura de fraude.','temas'],
 ['Verbos rectores','Identifica la conducta central descrita por el artículo penal.','temas']
];
$('#searchInput').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();const results=searchable.filter(x=>(x[0]+' '+x[1]).toLowerCase().includes(q));$('#searchResults').innerHTML=!q?'<p class="muted">Escribe una palabra como “robo”, “engaño” o “consentimiento”.</p>':results.length?results.map(x=>`<button class="search-result" data-target="${x[2]}"><strong>${x[0]}</strong><p>${x[1]}</p></button>`).join(''):'<p class="muted">No encontré resultados. Prueba con otra palabra.</p>';$$('[data-target]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.target)));});
function renderStats(){$('#statAnswered').textContent=stats.answered;$('#statCorrect').textContent=stats.correct;$('#statCards').textContent=stats.cards;}
$('#resetProgress').addEventListener('click',()=>{if(confirm('¿Quieres reiniciar el progreso guardado en este dispositivo?')){stats={answered:0,correct:0,cards:0};saveStats();renderStats();}});
renderCard();renderQuestion();