		debugger;		
var db = TAFFY([{spell:"assure", def:"tell someone something positively or confidently to dispel any doubts they may have.", used:false},
				{spell:"impeccable", def:"without fault or error", used:false},
				{spell:"stubborn", def:"tenaciously unwilling or marked by tenacious unwillingness to yield", used:false},
				{spell:"forbid", def:"command against", used:false},
				{spell:"chasm", def:"a deep opening in the earth's surface", used:false},
				{spell:"advisable", def:"worthy of being recommended or suggested", used:false},
				{spell:"perform", def:"get done ; carry out", used:false},
				{spell:"intention", def:"an anticipated outcome that is intended or that guides your planned actions", used:false},
				{spell:"glisten", def:"be shiny, as if wet", used:false},
				{spell:"repose", def:"freedom from worry", used:false},
				{spell:"mynopic", def:"unable to see distant object clearly", used:false},
				{spell:"congruent", def:"identical in form", used:false},
				{spell:"polygon", def:"a figure that lies in a plane and is form by 3 or more segment", used:false},
				{spell:"concave", def:"having an outline or surface curved like the exterior of a circle or sphere", used:false},
				{spell:"equiangular", def:"having equal angle", used:false},
				{spell:"postulate", def:"suggest or assumed the wxistence, fact, or truth", used:false},
				{spell:"sincere", def:"open and genuine", used:false},
				{spell:"enthusiasm", def:"a feeling of exitement", used:false},
				{spell:"sacrifice", def:"the act of killing in order to propitiate a deity", used:false},
				{spell:"accord", def:"concurrence of oponion", used:false},
				{spell:"inspire", def:"serve as the inciting cause of", used:false},
				{spell:"purpose", def:"what something is used for", used:false},
				{spell:"pleasure", def:"something or someone that provides a source of happiness", used:false},
				{spell:"desire", def:"the feeling that accompanies an unsatisfied state", used:false},
				{spell:"destruction", def:"an event (or the result of an event) that completely destroys something", used:false}]);

var rads = db.store("db");	

function taffyAddWord(word, def) {
	db.insert({spell:word, def:def , used:false});				
}
