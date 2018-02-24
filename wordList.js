
	function Words(spell, def, used, date, name) {
		this.spell = spell;
		this.def = def;
		this.used = used;
		this.date = wordDate(date);
		this.name = name;
	}

	function wordDate(dateIn) {
		var date = new Date(dateIn);
		return date.getFullYear() + "/" + ("0" +(date.getMonth()+1)).slice(-2) + "/" + date.getDate()  ;
	}

	var WordList = [new Words("assure", "tell someone something positively or confidently to dispell any doubts they may have.", false, "08/24/2017", "Kyu"),
				new Words("impeccable", "without fault or error", false, "08/24/2017", "Kyu"),
				new Words("stubborn", "tenaciously unwilling or marked by tenacious unwillingness to yield", false, "08/24/2017", "Kyu"),
				new Words("forbid", "command against", false, "08/24/2017", "Kyu"),
				new Words("chasm", "a deep opening in the earth's surface", false, "08/24/2017", "Kyu"),
				new Words("advisable", "worthy of being recommended or suggested", false, "08/24/2017", "Kyu"),
				new Words("perform", "get done ; carry out", false, "08/24/2017", "Kyu"),
				new Words("intention", "an anticipated outcome that is intended or that guides your planned actions", false, "08/24/2017", "Kyu"),
				new Words("glisten", "be shiny, as if wet", false, "08/24/2017", "Kyu"),
				new Words("repose", "freedom from worry", false, "08/24/2017", "Kyu"),
				new Words("mynopic", "unable to see distant object clearly", false, "08/24/2017", "Kyu"),
				new Words("tether", "keep things tied together", false, "08/24/2017", "Kyu"),
				new Words("reel", " a cylinder that can be wound with flexible material like film or fishing line", false, "08/24/2017", "Kyu"),
				new Words("brash", "offensively bold", false, "08/24/2017", "Kyu"),
				new Words("hedge", "living fence made of closely planted bushes", false, "08/24/2017", "Kyu"),
				new Words("sufficient", "of a quantity that can fulfill a need or requirement but without being abundant", false, "08/24/2017", "Kyu"),
				new Words("fragile", "easily broken or damaged or destroyed", false, "08/24/2017", "Kyu"),
				new Words("fray", "wear away by rubbing", false, "08/24/2017", "Kyu"),
				new Words("tweet", "a weak chirping sound as of a small bird", false, "08/24/2017", "Kyu"),
				new Words("stride", "walk with long step", false, "08/24/2017", "hoon"),
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
			    new Words("sensibility", "the ability to appreciate and respond to complex emotional", false, "09/10/2017", "hoon"),
				new Words("concern", "worry/a matter of interest or importance to someone.", false, "09/10/2017", "hoon"),
			    new Words("progressive", "proceeding step by step", false, "09/10/2017", "hoon"),
				new Words("distribute", "deal out", false, "09/10/2017", "hoon"),
				new Words("command", "authoritative order", false, "09/10/2017", "hoon"),
				new Words("exalt", "think or speak very highly of", false, "09/10/2017", "hoon"),
				new Words("delay", "period of time by which something is late or postponed.", false, "09/10/2017", "hoon"),
				new Words("chin", "lower jaw", false, "09/10/2017", "hoon"),
				new Words("regret", "a feeling of sadness or disappointment over something that has happened", false, "09/10/2017", "hoon"),
				new Words("presence", "the state or fact of existing, occurring", false, "09/10/2017", "Kyu"),
				new Words("consist", "made up of", false, "09/10/2017", "Kyu"),
				new Words("assort", "become distributed among cells or progeny", false, "09/10/2017", "Kyu"),
				new Words("substantial", "concerning the essentials of something", false, "09/10/2017", "Kyu"),
				new Words("convention", "an agreement between countries covering particular matters", false, "09/10/2017", "Kyu"),
				new Words("fortitude", "courage in pain or adversity.", false, "09/10/2017", "Kyu"),
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
			    new Words("insincerity","the quality of not expressing genuine feelings.", false, "09/16/2017", "hoon"),
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
				new Words("conclusion", "the end or finish of an event or process", false, "09/22/2017", "hoon"),
				new Words("claim", "a demand or request for something considered one's due", false, "09/22/2017", "hoon"),
				new Words("appropriate", "suitable", false, "09/22/2017", "hoon"),
				new Words("insufficient", "not enough", false, "09/22/2017", "hoon"),
				new Words("proride", "pride", false, "09/22/2017", "hoon"),
				new Words("proper", "truly what something is said or regarded to be", false, "09/22/2017", "hoon"),
				new Words("rebut", "claim or prove that is false", false, "09/22/2017", "hoon"),
				new Words("honor", "high respect", false, "09/22/2017", "hoon"),
				new Words("among", "surrounded by", false, "09/22/2017", "hoon"),
				new Words("sum", "the total amount resulting from the addition of two or more", false, "09/22/2017", "hoon"),
				new Words("faithful", "loyal, constant, and steadfast.", false, "09/22/2017", "hoon"),
				new Words("squarely", "directly, without deviating to one side.", false, "09/22/2017", "hoon"),
				new Words("indomitable", "mpossible to subdue or defeat.", false, "09/22/2017", "hoon"),
				new Words("principles", "a fundamental truth or proposition that serves as the foundation ", false, "09/22/2017", "hoon"),
				new Words("sake", "for the purpose of; in the interest of; in order to achieve or preserve.", false, "09/22/2017", "Kyu"),
				new Words("derive", "obtain something from (a specified source).", false, "09/22/2017", "Kyu"),
				new Words("hitch", "move (something) into a different position with a jerk.", false, "09/22/2017", "Kyu"),
				new Words("marvelous", "causing great wonder; extraordinary.", false, "09/22/2017", "Kyu"),
				new Words("decalogue", "the Ten Commandments.", false, "09/22/2017", "Kyu"),
				new Words("wagon", "a vehicle used for transporting goods or another specified purpose.", false, "09/22/2017", "Kyu"),
				new Words("exalted", "(of a person or their rank or status) placed at a high or powerful level; held in high regard.", false, "09/22/2017", "Kyu"),
				new Words("clench", "(with reference to the fingers or hand) close into a tight ball, especially when feeling extreme anger.", false, "09/22/2017", "Kyu"),
				new Words("regret", "a feeling of sadness, repentance, or disappointment over something that has happened or been done.", false, "09/22/2017", "Kyu"),
				new Words("harness", "a set of straps and fittings by which a horse or other draft animal is fastened to a cart, plow, etc., and is controlled by its driver.", false, "09/22/2017", "Kyu"),
				new Words("monied", "having much money; affluent.", false, "09/22/2017", "Kyu"),
				new Words("comparison", "the act or instance of comparing.", false, "09/22/2017", "Kyu"),
				new Words("incident", "an event or occurrence.", false, "09/22/2017", "Kyu"),
				new Words("monument", "a statue, building, or other structure erected to commemorate a famous or notable person or event.", false, "09/22/2017", "Kyu"),
				new Words("tribute", "an act, statement, or gift that is intended to show gratitude, respect, or admiration.", false, "09/22/2017", "Kyu"),
				new Words("stagnate", "stand still", false, "09/30/2017", "Kyu"),
				new Words("dare", "a challenge to do something dangerous or foolhardy", false, "09/30/2017", "Kyu"),
				new Words("initiate", "set in motion, start an event or prepare the way for", false, "09/30/2017", "Kyu"),
				new Words("blunder", "an embarrassing mistake", false, "09/30/2017", "Kyu"),
				new Words("vacillate", "be undecided about something; waver between conflicting positions or courses of action", false, "09/30/2017", "Kyu"),
				new Words("flabby", "out of condition; not strong or robust; incapable of exertion or endurance", false, "09/30/2017", "Kyu"),
				new Words("latent", "potentially existing but not presently evident or realized", false, "09/30/2017", "Kyu"),
				new Words("bereft", "sorrowful through loss or deprivation", false, "09/30/2017", "Kyu"),
				new Words("bolster", "support and strengthen", false, "09/30/2017", "Kyu"),
				new Words("brow", "the part of the face above the eyes", false, "09/30/2017", "Kyu"),
				new Words("abhor", "find repugnant", false, "09/30/2017", "Kyu"),
				new Words("gratification", "the act or an instance of satisfying", false, "09/30/2017", "Kyu"),
				new Words("prompt", "according to schedule or without delay; on time", false, "09/30/2017", "Kyu"),
				new Words("scold", "censure severely or angrily", false, "09/30/2017", "Kyu"),
				new Words("regretful", "feeling or expressing regret or sorrow or a sense of loss over something done or undone", false, "09/30/2017", "Kyu"),
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
					//today word
				new Words("turbulent", "characterized bydisorder, not", false, "01/14/2018", "Kyu"),
				new Words("cede", "give up(power or territoy)", false, "01/14/2018", "Kyu"),
				new Words("vulnerable", "characterized by disorder, not contri=olled, confusion", false, "01/14/2018", "Kyu"),
				new Words("emcompass", "surround and hold it/ cause to take palce", false, "01/14/2018", "Kyu"),
				new Words("wary", "feeling or showing coution about possible dangers", false, "01/14/2018", "Kyu"),
				new Words("allegiance", "the loyalt that a person owe to other person or group", false, "01/14/2018", "Kyu"),
				new Words("diplomate", "an offical who reprsent there's country to other nation", false, "01/14/2018", "Kyu"),
				new Words("embroil", "involve deeply in an situation or argument", false, "01/14/2018", "Kyu"),
				new Words("disastrous", "causing great damage", false, "01/14/2018", "Kyu"),
				new Words("notorious", "famous or well konwn", false, "01/14/2018", "Kyu"),
				new Words("sheriff", "(in the US)top-ranking officer in country police force", false, "01/14/2018", "Kyu"),
				new Words("whip", "a strip of leather used for flogging or beating", false, "01/14/2018", "Kyu"),
				new Words("disparity", "great difference", false, "01/14/2018", "Kyu"),
				new Words("sentimont", "an opinion/ feeling or emotion", false, "01/14/2018", "Kyu"),
				new Words("hyperbolic", "enlarged beyond truth", false, "01/14/2018", "Kyu"),
				new Words("smudge", "blur it in a messy way", false, "01/14/2018", "hoon"),
				new Words("lopside", "habing one side low or small or lighter than the other", false, "01/14/2018", "hoon"),
				new Words("dreary", "lacking in liveliness or surprise", false, "01/14/2018", "hoon"),
				new Words("adopted", "acquired as your own by free choise", false, "01/14/2018", "hoon"),
				new Words("stripe", "a narrow marking of different color or texture", false, "01/14/2018", "hoon"),
				new Words("court", "room where justice is administered", false, "01/14/2018", "hoon"),
				new Words("suburb", "residential district located or the outskirts of city", false, "01/14/2018", "hoon"),
				new Words("seem", "appear", false, "01/14/2018", "hoon"),
				new Words("droplet", "a tiny drop", false, "01/14/2018", "hoon"),
				new Words("cigarette", "a small tube of paper that's filled with tobacco", false, "01/14/2018", "hoon"),
				new Words("inhale", "to breathe", false, "01/14/2018", "hoon"),
				new Words("emerge", "comeout into view", false, "01/14/2018", "hoon"),
				new Words("acquire", "to get or come to own something", false, "01/14/2018", "hoon"),
				new Words("margin", "amount beyond the minimum necessory; edge", false, "01/14/2018", "hoon"),
				new Words("council", "group of people that gather for the purpose of giving adivice of making decision", false, "01/14/2018", "hoon"),
				new Words("cache", "to store something in hide for future use", false, "02/17/2018", "Kyu"),
				new Words("bead", "marble", false, "02/17/2018", "Kyu"),
				new Words("renounce", "to give up(claim, right, cause)", false, "02/17/2018", "Kyu"),
				new Words("occation", "a particular time of an event", false, "02/17/2018", "Kyu"),
				new Words("abjure", "to renounce(belief, claim, cause)", false, "02/17/2018", "Kyu"),
				new Words("incognito", "having one's true identity concealed", false, "02/17/2018", "Kyu"),
				new Words("whirl", "to spin rapidly", false, "02/17/2018", "Kyu"),
				new Words("taxonomy", "the branch of science concerned with classification", false, "02/17/2018", "Kyu"),
				new Words("vortex", "mass of whiring fluid or air", false, "02/17/2018", "Kyu"),
				new Words("conceal", "to hide", false, "02/17/2018", "Kyu"),
				new Words("mast", "tall pole to hang sail", false, "02/17/2018", "Kyu"),
				new Words("frock", "a woman\'s or girl\'s dress", false, "02/17/2018", "Kyu"),
				new Words("roam", "to move around in wide area", false, "02/17/2018", "Kyu"),
				new Words("swarm", "a group of insects, espacially flying ones", false, "02/17/2018", "Kyu"),
				new Words("enervate", "lacking in energy or vitality", false, "02/17/2018", "Kyu"),
				new Words("belie", "to show to be false", false, "02/17/2018", "hoon"),
				new Words("diffident", "lacking or marked by a lack of self-confidence", false, "02/17/2018", "hoon"),
				new Words("tatter", "ragged or scrap of something", false, "02/17/2018", "hoon"),
				new Words("abstemious", "eatting and drinking in moderation", false, "02/17/2018", "hoon"),
				new Words("servant", "aperson working in serivice of anther", false, "02/17/2018", "hoon"),
				new Words("posse", "police force", false, "02/17/2018", "hoon"),
				new Words("scowl", "make angry face", false, "02/17/2018", "hoon"),
				new Words("proper", "marked by rightness or suitability", false, "02/17/2018", "hoon"),
				new Words("sage", "having a lot experience; wise man", false, "02/17/2018", "hoon"),
				new Words("soggy", "Soft and watery", false, "02/17/2018", "hoon"),
				new Words("dormant", "inactive, but can be active again", false, "02/17/2018", "hoon"),
				new Words("ammunition", "ammo,arms;imformation that can be need to attact ", false, "02/17/2018", "hoon"),
				new Words("insecure", "lacking security or safety", false, "02/17/2018", "hoon")
			   ];	

