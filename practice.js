// JavaScript Document
function Words(spel, def, use, date, name) {
	this.spel = spel;
	this.def = def;
	this.use = use;
	this.date = date;
	this.name = name;
}

var WordList = [new Words("assure", "tell someone something positively or confidently to dispel any doubts they may have.", false, "08/24/17", "Kyu"),
				new Words("impeccable", "without fault or error", false, "08/24/17", "Kyu"),
				new Words("stubborn", "tenaciously unwilling or marked by tenacious unwillingness to yield", false, "08/24/17", "Kyu"),
				new Words("forbid", "command against", false, "08/24/17", "Kyu"),
				new Words("chasm", "a deep opening in the earth's surface", false, "08/24/17", "Kyu"),
				new Words("advisable", "worthy of being recommended or suggested", false, "08/24/17", "Kyu"),
				new Words("perform", "get done ; carry out", false, "08/24/17", "Kyu"),
				new Words("intention", "an anticipated outcome that is intended or that guides your planned actions", false, "08/24/17", "Kyu"),
				new Words("glisten", "be shiny, as if wet", false, "08/24/17", "Kyu"),
				new Words("repose", "freedom from worry", false, "08/24/17", "Kyu"),
				new Words("mynopic", "unable to see distant object clearly", false, "08/24/17", "Kyu"),
				new Words("tether", "keep things tied together", false, "08/24/17", "Kyu"),
				new Words("reel", " a cylinder that can be wound with flexible material like film or fishing line", false, "08/24/17", "Kyu"),
				new Words("brash", "offensively bold", false, "08/24/17", "Kyu"),
				new Words("hedge", "living fence made of closely planted bushes", false, "08/24/17", "Kyu"),
				new Words("sufficient", "of a quantity that can fulfill a need or requirement but without being abundant", false, "08/24/17", "Kyu"),
				new Words("fragile", "easily broken or damaged or destroyed", false, "08/24/17", "Kyu"),
				new Words("fray", "wear away by rubbing", false, "08/24/17", "Kyu"),
				new Words("tweet", "a weak chirping sound as of a small bird", false, "08/24/17", "Kyu"),
				new Words("stride", "walk with long step", false, "08/24/17", "hoon"),
				new Words("congruent", "identical in form", false, "09/03/2017", "hoon"),
				new Words("polygon", "a figure that lies in a plane and is form by 3 or more segment", false, "09/03/2017", "hoon"),
				new Words("convex", "having an outline or surface curved like the exterior of a circle or sphere.", false, "09/03/2017", "hoon"),
				new Words("concave", "having an outline or surgace that curves inward like the interior of a circle or sphere", false, "09/03/2017", "hoon"),
				new Words("equiangular", "having equal angle", false, "09/03/2017", "hoon"),
				new Words("postulate", "suggest or assumed the wxistence, fact, or truth", false, "09/03/2017", "hoon"),
				new Words("sincere", "open and genuine", false, "09/03/2017", "hoon"),
				new Words("enthusiasm", "a feeling of exitement", false, "09/03/2017", "hoon"),
				new Words("sacrifice", "the act of killing in order to propitiate a deity", false, "09/03/2017", "hoon"),
				new Words("accord", "aoncurrence of oponion", false, "09/03/2017", "hoon"),
				new Words("inspire", "serve as the inciting cause of", false, "09/03/2017", "hoon"),
				new Words("purpose", "what something is used for", false, "09/03/2017", "hoon"),
				new Words("pleasure", "something or someone that provides a source of happiness", false, "09/03/2017", "hoon"),
				new Words("desire", "the feeling that accompanies an unsatisfied state", false, "09/03/2017", "hoon"),
				new Words("destruction", "an event (or the result of an event) that completely destroys something", false, "09/03/2017", "hoon"),
			    new Words("sensibility", "the ability to appreciate and respond to complex emotional", false, "9/10/2017", "hoon"),
				new Words("concern", "worry/a matter of interest or importance to someone.", false, "9/10/2017", "hoon"),
			    new Words("progressive", "proceeding step by step", false, "9/10/2017", "hoon"),
				new Words("distribute", "deal out", false, "9/10/2017", "hoon"),
				new Words("command", "authoritative order", false, "9/10/2017", "hoon"),
				new Words("exalt", "think or speak very highly of", false, "9/10/2017", "hoon"),
				new Words("delay", "period of time by which something is late or postponed.", false, "9/10/2017", "hoon"),
				new Words("chin", "lower jaw", false, "9/10/2017", "hoon"),
				new Words("regret", "a feeling of sadness or disappointment over something that has happened", false, "9/10/2017", "hoon"),
				new Words("presence", "the state or fact of existing, occurring", false, "9/10/2017", "Kyu"),
				new Words("consist", "made up of", false, "9/10/2017", "Kyu"),
				new Words("assort", "become distributed among cells or progeny", false, "9/10/2017", "Kyu"),
				new Words("substantial", "concerning the essentials of something", false, "9/10/2017", "Kyu"),
				new Words("convention", "an agreement between countries covering particular matters", false, "9/10/2017", "Kyu"),
				new Words("fortitude", "courage in pain or adversity.", false, "9/10/2017", "Kyu"),
			    new Words("occupation","a job or profession.", false, "09/16/2017", "hoon"),
			    new Words("influence","the capacity to have an effect on the character, development, or behavior of someone", false, "09/16/2017", "hoon"),
			    new Words("humblest","having or showing a modest or low estimate", false, "09/16/2017", "hoon"),
			    new Words("instrument","a tool or implement, especially one for delicate or scientific work.", false, "09/16/2017", "hoon"),
			    new Words("astonished","greatly surprised or impressed; amazed.", false, "09/16/2017", "hoon"),
			    new Words("impregnable","unable to be captured or broken into.", false, "09/16/2017", "hoon"),
			    new Words("conscience","inner feeling or voice viewed as acting as a guide to the rightnes", false, "09/16/2017", "hoon"),
			    new Words("accompany","go somewhere with (someone) as a companion", false, "09/16/2017", "hoon"),
			    new Words("precision","the quality, condition, or fact of being exact and accurate.", false, "09/16/2017", "hoon"),
			    new Words("encumbrance","a burden or impediment.", false, "09/16/2017", "hoon"),
			    new Words("insincerity","the quality of not expressing genuine feelings.", false, "09/16/2017"),
			    new Words("opportunity"," set of circumstances that makes it possible to do something.", false, "09/16/2017", "hoon"),
			    new Words("persistent","bstinately in a course of action in spite of difficulty or opposition.", false, "09/16/2017", "hoon"),
			    new Words("courageous","not deterred by danger or pain; brave.", false, "09/16/2017", "hoon"),
			    new Words("stendiness","a general direction in which something is developing or changing.", "09/16/2017", false, "hoon"),
			    new Words("interpret","explain the meaning of (information, words, or actions).", false, "09/16/2017","Kyu"),
			    new Words("invigorate","give strength or energy to.", false, "09/16/2017","Kyu"),
			    new Words("dispute","a disagreement, argument, or debate.", false, "09/16/2017","Kyu"),
			    new Words("wrangle","a dispute or argument, typically one that is long and complicated.", false, "09/16/2017","Kyu"),
			    new Words("antiquated","old-fashioned or outdated.", false, "09/16/2017","Kyu"),
			    new Words("brim","the projecting edge around the bottom of a hat.", false, "09/16/2017","Kyu"),
			    new Words("radiate","emit (energy, especially light or heat) in the form of rays or waves.", false, "09/16/2017","Kyu"),
			    new Words("asset","a useful or valuable thing, person, or quality.", false, "09/16/2017","Kyu"),
			    new Words("unassailable","unable to be attacked, questioned, or defeated.", false, "09/16/2017","Kyu"),
			    new Words("besmirch","damage the reputation of (someone or something) in the opinion of others.", false, "09/16/2017","Kyu"),
			    new Words("reputation","the beliefs or opinions that are generally held about someone or something.", false, "09/16/2017","Kyu"),
			    new Words("generous","(of a person) showing a readiness to give more of something, as money or time, than is strictly necessary or expected.", false, "09/16/2017","Kyu"),
			    new Words("vitality","the state of being strong and active; energy.", false, "09/16/2017","Kyu"),
			    new Words("blunder","a stupid or careless mistake.", false, "09/16/2017","Kyu"),
			    new Words("rut","a long deep track made by the repeated passage of the wheels of vehicles.", false, "09/16/2017","Kyu"),
				new Words("conclusion", "the end or finish of an event or process", false, "9/22/2017", "hoon"),
				new Words("claim", "a demand or request for something considered one's due", false, "9/22/2017", "hoon"),
				new Words("appropriate", "suitable", false, "9/22/2017", "hoon"),
				new Words("insufficient", "not enough", false, "9/22/2017", "hoon"),
				new Words("proride", "pride", false, "9/22/2017", "hoon"),
				new Words("proper", "truly what something is said or regarded to be", false, "9/22/2017", "hoon"),
				new Words("rebut", "claim or prove that is false", false, "9/22/2017", "hoon"),
				new Words("honor", "high respect", false, "9/22/2017", "hoon"),
				new Words("among", "surrounded by", false, "9/22/2017", "hoon"),
				new Words("sum", "the total amount resulting from the addition of two or more", false, "9/22/2017", "hoon"),
				new Words("faithful", "loyal, constant, and steadfast.", false, "9/22/2017", "hoon"),
				new Words("squarely", "directly, without deviating to one side.", false, "9/22/2017", "hoon"),
				new Words("indomitable", "mpossible to subdue or defeat.", false, "9/22/2017", "hoon"),
				new Words("principle", "a fundamental truth or proposition that serves as the foundation ", false, "9/22/2017", "hoon"),
				new Words("sake", "for the purpose of; in the interest of; in order to achieve or preserve.", false, "9/22/2017", "Kyu"),
				new Words("derive", "obtain something from (a specified source).", false, "9/22/2017", "Kyu"),
				new Words("hitch", "move (something) into a different position with a jerk.", false, "9/22/2017", "Kyu"),
				new Words("marvelous", "causing great wonder; extraordinary.", false, "9/22/2017", "Kyu"),
				new Words("decalogue", "the Ten Commandments.", false, "9/22/2017", "Kyu"),
				new Words("wagon", "a vehicle used for transporting goods or another specified purpose.", false, "9/22/2017", "Kyu"),
				new Words("exalted", "(of a person or their rank or status) placed at a high or powerful level; held in high regard.", false, "9/22/2017", "Kyu"),
				new Words("clench", "(with reference to the fingers or hand) close into a tight ball, especially when feeling extreme anger.", false, "9/22/2017", "Kyu"),
				new Words("regret", "a feeling of sadness, repentance, or disappointment over something that has happened or been done.", false, "9/22/2017", "Kyu"),
				new Words("harness", "a set of straps and fittings by which a horse or other draft animal is fastened to a cart, plow, etc., and is controlled by its driver.", false, "9/22/2017", "Kyu"),
				new Words("monied", "having much money; affluent.", false, "9/22/2017", "Kyu"),
				new Words("comparison", "the act or instance of comparing.", false, "9/22/2017", "Kyu"),
				new Words("incident", "an event or occurrence.", false, "9/22/2017", "Kyu"),
				new Words("monument", "a statue, building, or other structure erected to commemorate a famous or notable person or event.", false, "9/22/2017", "Kyu"),
				new Words("tribute", "an act, statement, or gift that is intended to show gratitude, respect, or admiration.", false, "9/22/2017", "Kyu"),
				new Words("stagnate", "stand still", false, "9/30/2017", "Kyu"),
				new Words("dare", "a challenge to do something dangerous or foolhardy", false, "9/30/2017", "Kyu"),
				new Words("initiate", "set in motion, start an event or prepare the way for", false, "9/30/2017", "Kyu"),
				new Words("blunder", "an embarrassing mistake", false, "9/30/2017", "Kyu"),
				new Words("vacillate", "be undecided about something; waver between conflicting positions or courses of action", false, "9/30/2017", "Kyu"),
				new Words("flabby", "out of condition; not strong or robust; incapable of exertion or endurance", false, "9/30/2017", "Kyu"),
				new Words("latent", "potentially existing but not presently evident or realized", false, "9/30/2017", "Kyu"),
				new Words("bereft", "sorrowful through loss or deprivation", false, "9/30/2017", "Kyu"),
				new Words("bolster", "support and strengthen", false, "9/30/2017", "Kyu"),
				new Words("brow", "the part of the face above the eyes", false, "9/30/2017", "Kyu"),
				new Words("abhor", "find repugnant", false, "9/30/2017", "Kyu"),
				new Words("gratification", "the act or an instance of satisfying", false, "9/30/2017", "Kyu"),
				new Words("prompt", "according to schedule or without delay; on time", false, "9/30/2017", "Kyu"),
				new Words("scold", "censure severely or angrily", false, "9/30/2017", "Kyu"),
				new Words("regretful", "feeling or expressing regret or sorrow or a sense of loss over something done or undone", false, "9/30/2017", "Kyu"),
				new Words("cultivate", "to prepare and work on(land) in order to raise crops", false, "10/7/2017", "Kyu"),
				new Words("regret", "to feel sorrow for(an act, fault etc.)", false, "10/7/2017", "Kyu"),
				new Words("impregnable", "strong enough to resist or withstand attack", false, "10/7/2017", "Kyu"),
				new Words("cue", "anything said or done", false, "10/7/2017", "Kyu"),
				new Words("constant", "not changing, regular, uniform", false, "10/7/2017", "Kyu"),
				new Words("scalp", "skin covering the head", false, "10/7/2017", "Kyu"),
				new Words("hesitate", "to be willing to do something", false, "10/7/2017", "Kyu"),
				new Words("revel", "to show great joy", false, "10/7/2017", "Kyu"),
				new Words("cow", "to make(someone) too afraid to do something", false, "10/7/2017", "Kyu"),
				new Words("harbor", "a place of safety", false, "10/7/2017", "Kyu"),
				new Words("idle", "not working, active, or being used", false, "10/7/2017", "Kyu"),
				new Words("fraud", "the crime of using dishonest method to take something valuable from another person", false, "10/7/2017", "Kyu"),
				new Words("counterfeit", "made to look like an exact copy of something in order to trick people", false, "10/7/2017", "Kyu"),
				new Words("pave", "to lay or cover with material", false, "10/7/2017", "Kyu"),
				new Words("indomitable", "impossible to defeat or discourage", false, "10/7/2017", "Kyu"),
				new Words("policy", "a plan of action adopted by an individual or social group", false, "10/14/2017", "Kyu"),
				new Words("efficient", "being effective without wasting time or effort or expense", false, "10/14/2017", "Kyu"),
				new Words("shirk", "avoid (one's assigned duties)", false, "10/14/2017", "Kyu"),
				new Words("intellectual", "of or associated with or requiring the use of the mind", false, "10/14/2017", "Kyu"),
				new Words("faculty", "one of the inherent cognitive or perceptual powers of the mind", false, "10/14/2017", "Kyu"),
				new Words("insist", "be emphatic or resolute and refuse to budge", false, "10/14/2017", "Kyu"),
				new Words("conspiracy", "a plot to carry out some harmful or illegal act ", false, "10/14/2017", "Kyu"),
				new Words("encumbrance", "an onerous or difficult concern", false, "10/14/2017", "Kyu"),
				new Words("glare", "be sharply reflected", false, "10/14/2017", "Kyu"),
				new Words("spite", "malevolence by virtue of being malicious or spiteful or nasty", false, "10/14/2017", "Kyu"),
				new Words("vanity", "feelings of excessive pride", false, "10/14/2017", "Kyu"),
				new Words("defect", "a failing or deficiency", false, "10/14/2017", "Kyu"),
				new Words("generous", "willing to give and share unstintingly", false, "10/14/2017", "Kyu"),
				new Words("magnanimous", "noble and generous in spirit", false, "10/14/2017", "Kyu"),
				new Words("modest", "marked by simplicity; having a humble opinion of yourself", false, "10/14/2017", "Kyu"),
				new Words("strife", "angry or bitter disagreement over fundamental issues; conflict.", false, "10/14/2017", "hoon"),
				new Words("toil", "exhausting physical labor./work extremely hard or incessantly.", false, "10/14/2017", "hoon"),
				new Words("firm", "having a solid, almost unyielding surface or structure", false, "10/14/2017", "hoon"),
				new Words("patient", "able to accept or tolerate delays, problems, or suffering without becoming annoyed", false, "10/14/2017", "hoon"),
				new Words("concept", "an abstract idea; a general notion.", false, "10/14/2017", "hoon"),
				new Words("courage", "the ability to do something that frightens one.", false, "10/14/2017", "hoon"),
				new Words("approach", "a way of dealing with something.", false, "10/14/2017", "hoon"),
				new Words("spurs", "a device with a small spike or a spiked wheel that is worn on a rider's heel and used for urging a horse forward.", false, "10/14/2017", "hoon"),
				new Words("intricate", "very complicated or detailed.", false, "10/14/2017", "hoon"),
				new Words("principal", "first in order of importance; main.", false, "10/14/2017", "hoon"),
				new Words("loom", "an apparatus for making fabric by weaving yarn or thread.", false, "10/14/2017", "hoon"),
				new Words("undertaken", "commit oneself to and begin (an enterprise or responsibility); take on", false, "10/14/2017", "hoon"),
				new Words("neglect", "the state or fact of being uncared for.", false, "10/14/2017", "hoon"),
				new Words("strive", "make great efforts to achieve or obtain something.; fight", false, "10/14/2017", "hoon"),
				new Words("trivial", "of little value or importance.", false, "10/14/2017 ", "hoon")
			   ];
	
var choices;
var answer;

function GetRandomNumber(max)
{
	var r1 = Math.floor(Math.random() * max); 
	console.log("Next random="+r1); 
	return r1; 
}

function GetRandomWordFromList()
{
	var found = false; 
	var idx ; 
	do {
		idx = GetRandomNumber(WordList.length); 
		if (!WordList[idx].used) {			
			found = true; 
		}
	} while (!found); 
	return idx; 
}
// 	
function showCard() {
	//debugger;
	// 1. set up answer
	var answeridx = GetRandomNumber(WordList.length);
	var AnswerDeftxt = WordList[answeridx].def;
	var AnswerSpelltxt = WordList[answeridx].spel;
	WordList[answeridx].used = true; 
	// Set top definition
	document.getElementById("main").innerHTML = AnswerDeftxt;
	document.getElementById("main").value = AnswerSpelltxt;	
	
	var choices1 = [] ; 
	var chNum = 0;
	var wlidx ; 	
	// 3. Getting 3 more random words and THEN put all 4 words into random choices
	choices1[chNum++] = answeridx;
	while (chNum < 4 ) {
		
		wlidx = GetRandomWordFromList();
		// add to choices array 
		choices1[chNum++] = wlidx;		
	}
	debugger; 
	choices1.sort(); 
	// Now I have an array of 4 idx into WordList in choice1
	for (var i=0; i<4; ++i) {
		var elid = "choise" + (i+1);
	    var boxx = document.getElementById(elid);
		var subscript1 = choices1[i]; 
		boxx.innerHTML = WordList[subscript1].spel;
	    boxx.value = WordList[choices1[i]].def;
	}
	
	
	for (i = 0;i < WordList.length; i++) {
		WordList[i].used = false;		
	}
}

function answerCheck(answerNum) {
	debugger;
	var selection = document.getElementById("choise" + answerNum).value;
	var Mtxt = document.getElementById("main").value;
	if (selection == Mtxt) {
		showCard();
	}
//	else {
		
//	}
}
