document.getElementById('import').onclick = function() {
	var files = document.getElementById('selectFiles').files;

  if (files.length <= 0) {
    return false;
  }

  var mylist = document.getElementById("myList");  
  var toCompare = mylist.options[mylist.selectedIndex].value


  const dontshow_topspeed = document.getElementById('dontshow_topspeed').checked;
  var fr = new FileReader();
  
  fr.onload = function(e) { 
    var result = JSON.parse(e.target.result);
    var items = result.items;
    console.log(items);
    var text = "";
    var total90=0
    var totaleq_80=0
    var total90_75=0
    var total90_70=0
    var total90_88_75=0
    var total90_88_70=0
    var total90_85_75=0
    var total90_85_70=0

    var totalspeed_22=0
    var totalspeed_20=0
    var totalspeed_18=0
    var totalspeed_sp_22=0
    var totalspeed_sp_20=0
    var totalspeed_sp_18=0

    var total_gear_dps_75=0
    var total_gear_support_72=0
    var total_gear_bruser_75=0


    var total_gear_dps=0
    var total_gear_support=0
    var total_gear_bruser=0

    var total_gear_init=0
    var total_gear_cleave=0
    var total_gear_fastsupport=0
    var total_gear_res=0

    var total_roll_5_attack = 0
    var total_roll_5_health = 0
    var total_roll_5_def = 0

    var total_roll_6_eff = 0;
    var total_roll_6_eff_65 = 0;

    var top_speed = []
    var top_EffectResistancePercent = []
    var top_Attack = []
    var top_AttackPercent = []
    var top_CriticalHitChancePercent = []
    var top_CriticalHitDamagePercent = []
    var top_Defense = []
    var top_DefensePercent = []
    var top_EffectivenessPercent = []
    var top_Health = []
    var top_HealthPercent = []

    var speed_weapon=[]
    var speed_helmet=[]
    var speed_Armor=[]
    var speed_neck=[]
    var speed_ring=[]

    var speed_weapon_s=[]
    var speed_helmet_s=[]
    var speed_Armor_s=[]
    var speed_neck_s=[]
    var speed_ring_s=[]

    for (var i = 0; i < items.length; i++){
        var obj = items[i];
        var speed = obj['reforgedStats']["Speed"];
        top_speed.push(speed)

        if (obj["gear"]=="Weapon"){
            speed_weapon.push(speed)
            if (obj["set"] == "SpeedSet"){
                speed_weapon_s.push(speed)
            }
        }
 
        if (obj["gear"]=="Helmet"){
            speed_helmet.push(speed)
            if (obj["set"] == "SpeedSet"){
                speed_helmet_s.push(speed)
            }
        }
                

        if (obj["gear"]=="Armor"){
            speed_Armor.push(speed)
            if (obj["set"] == "SpeedSet"){
                speed_Armor_s.push(speed)
            }
        }

        if (obj["gear"]=="Necklace"){
            speed_neck.push(speed)
            if (obj["set"] == "SpeedSet"){
                speed_neck_s.push(speed)
            }
        }


        if (obj["gear"]=="Ring"){
            speed_ring.push(speed)
            if (obj["set"] == "SpeedSet"){
                speed_ring_s.push(speed) 
            }
        }

        var res = obj['reforgedStats']["EffectResistancePercent"];
        res = Number(res)
        top_EffectResistancePercent.push(res)

        var attack = obj['reforgedStats']["Attack"];
        attack = Number(attack)
        top_Attack.push(attack)

        var attackp = obj['reforgedStats']["AttackPercent"];
        attackp = Number(attackp)
        top_AttackPercent.push(attackp)

        var cc = obj['reforgedStats']["CriticalHitChancePercent"];
        cc = Number(cc)
        top_CriticalHitChancePercent.push(cc)

        var cd = obj['reforgedStats']["CriticalHitDamagePercent"];
        cd = Number(cd)
        top_CriticalHitDamagePercent.push(cd)

        var def = obj['reforgedStats']["Defense"];
        def = Number(def)
        top_Defense.push(def)

        var defp = obj['reforgedStats']["DefensePercent"];
        defp = Number(defp)
        top_DefensePercent.push(defp)

        var eff = obj['reforgedStats']["EffectivenessPercent"];
        eff = Number(eff)
        top_EffectivenessPercent.push(eff)

        var health = obj['reforgedStats']["Health"];
        health = Number(health)
        top_Health.push(health)

        var healthp = obj['reforgedStats']["HealthPercent"];
        healthp = Number(healthp)
        top_HealthPercent.push(healthp)

        var eff_rolls = 0
        for (j=0; j < obj['substats'].length; j++) {
            var rolls = obj['substats'][j]['rolls']
            rolls = Number(rolls)

            if (obj['substats'][j].type == 'Attack' && rolls >= 5)
                total_roll_5_attack++

            if (obj['substats'][j].type == 'Health' && rolls >= 5)
                total_roll_5_health++ 

            if (obj['substats'][j].type == 'Defense' && rolls >= 5)
                total_roll_5_def++       

            if (obj['substats'][j].type == 'EffectivenessPercent')
                eff_rolls += rolls  
            if (obj['substats'][j].type == 'EffectResistancePercent')
                eff_rolls += rolls         
        }

        if (eff_rolls >= 6){
            total_roll_6_eff++
            if (equip_score <= 65)
                total_roll_6_eff_65++
        }
        
        if (speed >= 18)
           totalspeed_18++
        if (speed >= 20)
            totalspeed_20++   
        if (speed >= 22)
            totalspeed_22++
        if (obj["set"] == "SpeedSet"){
            if (speed >= 18)
            totalspeed_sp_18++
            if (speed >= 20)
                totalspeed_sp_20++   
            if (speed >= 22)
                totalspeed_sp_22++
        }   
    
        var equip_score = obj['reforgedWss']
        equip_score = Number(equip_score)

        var level = obj['level']
        level = Number(level)
        if (level == 90){
            total90++
            if (equip_score >= 70){
                total90_70++
            }
            if (equip_score >= 75){
                total90_75++
            }
        }
        if (level == 88){
            if (equip_score >= 70){
                total90_88_70++
            }
            if (equip_score >= 75){
                total90_88_75++
            }
        }
        if (level == 85){
            if (equip_score >= 70){
                total90_85_70++
            }
            if (equip_score >= 75){
                total90_85_75++
            }
        }
        if (equip_score >= 80){
            totaleq_80++
        }

        var dps_score = obj['dpsWss']
        dps_score = Number(dps_score)

        var support_score = obj['supportWss']
        support_score = Number(support_score)

        var combat_score = obj['combatWss']
        combat_score = Number(combat_score)

        if (dps_score >= 75){
            total_gear_dps_75++
        }
        if (support_score >= 72){
            total_gear_support_72++
        }
        if (combat_score >= 75){
            total_gear_bruser_75++
        }

        if (dps_score >= 70){
            total_gear_dps++
        }
        if (support_score >= 67){
            total_gear_support++
        }
        if (combat_score >= 70){
            total_gear_bruser++
        }


        if (obj["set"] == "SpeedSet" && speed >= 20 ){
            total_gear_init++
        } 
        if (obj["set"] != "SpeedSet" && speed >= 22 ){
            total_gear_init++
        }   

        if (dps_score >= 70 && speed >=15){
            total_gear_cleave++
        }

        if (res >= 28){
            total_gear_res++
        }

        if (support_score >= 67 && speed >=15){
            total_gear_fastsupport++
        }
    }


    speed_weapon=Math.max(...speed_weapon)
    speed_helmet=Math.max(...speed_helmet)
    speed_Armor=Math.max(...speed_Armor)
    speed_neck=Math.max(...speed_neck)
    speed_ring=Math.max(...speed_ring)

    speed_weapon_s=Math.max(...speed_weapon_s)
    speed_helmet_s=Math.max(...speed_helmet_s)
    speed_Armor_s=Math.max(...speed_Armor_s)
    speed_neck_s=Math.max(...speed_neck_s)
    speed_ring_s=Math.max(...speed_ring_s)

    speed_diff = [speed_weapon-speed_weapon_s, speed_helmet-speed_helmet_s,
    speed_Armor-speed_Armor_s,speed_neck-speed_neck_s,speed_ring-speed_ring_s]
    speed_diff.sort();

    gear_speed = speed_weapon_s+speed_helmet_s+speed_Armor_s+speed_neck_s+speed_ring_s
    gear_speed += speed_diff[4] + speed_diff[3]
    ran_speed=161 + gear_speed + 45
    lots_speed=140 + gear_speed + 45      

    var formatted = JSON.stringify(items, null, 2);
    if (!dontshow_topspeed){
        text = text + "Ran más rapido: " + ran_speed + "\n"
        text = text + "A.Lots más rapido: " + lots_speed + "\n"
        text = text + "\n"
    }
    text = text + "80+ Total: " + totaleq_80 + "\n"
    text = text + "90 Total: " + total90 + "\n"
    text = text + "90 Total 75+: " + total90_75 + "\n"
    text = text + "90 Total 70+: " + total90_70 + "\n"
    text = text + "88 Total 75+: " + total90_88_75 + "\n"
    text = text + "88 Total 70+: " + total90_88_70 + "\n"
    text = text + "85 Total 75+: " + total90_85_75 + "\n"
    text = text + "85 Total 70+: " + total90_85_70 + "\n"
        text = text + "\n"
    text = text + "22 Speed+: " + totalspeed_22 + "\n"
    text = text + "20 Speed+: " + totalspeed_20 + "\n"
    text = text + "18 Speed+: " + totalspeed_18 + "\n"
    text = text + "22 Speed+ set Speed: " + totalspeed_sp_22 + "\n"
    text = text + "20 Speed+ set Speed: " + totalspeed_sp_20 + "\n"
    text = text + "18 Speed+ set Speed: " + totalspeed_sp_18 + "\n"
        text = text + "\n"
    text = text + "Gear DPS 75 GS +: " + total_gear_dps_75 + "\n"
    text = text + "Gear Support 72 GS +: " + total_gear_support_72 + "\n"
    text = text + "Gear Bruiser 75 GS +: " + total_gear_bruser_75 + "\n"
    text = text + "Gear DPS 70 GS +: " + total_gear_dps + "\n"
    text = text + "Gear Support 67 GS +: " + total_gear_support + "\n"
    text = text + "Gear Bruiser 70 GS +: " + total_gear_bruser + "\n"
    text = text + "20+ Speed Set o 22+ Broken: " + total_gear_init + "\n"
    text = text + "15+ DPS 70 GS Total+: " + total_gear_cleave + "\n"
    text = text + "15+ Support 67 GS Total+: " + total_gear_fastsupport + "\n"
    text = text + "Gear Effect Resist 28+: " + total_gear_res + "\n"

    mb = [total_gear_cleave/16, total_gear_dps/60,total_gear_dps_75/12,(lots_speed-185)/122,
    totalspeed_22/20, totalspeed_sp_22/10,totalspeed_sp_20/25,totalspeed_sp_18/65,
   total_gear_bruser/346, total_gear_bruser_75/60, 
   total_gear_fastsupport/25,total_gear_support/75,total_gear_support_72/12,
   total90/1688, total90_75/94]

   speedscore = Math.pow(mb[3], 1/(2-(300-lots_speed)/20))*0.88+ Math.sqrt(Math.sqrt(mb[4]))*0.03+Math.sqrt(Math.sqrt(Math.max(mb[5],0.05)))*0.03+Math.sqrt(mb[6])*0.03+Math.sqrt(mb[7])*0.03;

   d5 = [(Math.sqrt(Math.sqrt(mb[0]))*0.2+ Math.sqrt(Math.sqrt(Math.sqrt(mb[1])))*0.4+Math.sqrt(Math.sqrt(mb[2]))*0.4),
   speedscore,
   (Math.sqrt(Math.sqrt(mb[8]))*0.3+ Math.sqrt(Math.sqrt(mb[9]))*0.7),
   (Math.sqrt(Math.sqrt(mb[10]))+ Math.sqrt(Math.sqrt(mb[11]))+Math.sqrt(Math.sqrt(mb[12])))/3,
   (Math.sqrt(Math.sqrt(Math.sqrt(mb[13])))*0.4+ Math.sqrt(Math.sqrt(Math.sqrt(mb[14])))*0.6)]


    d5 = [Math.round(d5[0]*100), Math.round(d5[1]*100),Math.round(d5[2]*100),Math.round(d5[3]*100),Math.round(d5[4]*100)]
   

    var marksCanvas = document.getElementById("marksChart");

    var toCompareData =  {}
    toCompareData["Ragnoelt4"] = [79, 86, 87, 83, 87.25]
    toCompareData["Kundalt"] = [85, 87, 98, 77, 93.2]
    toCompareData["Kaluso"] = [46, 75, 53, 64, 75]
    toCompareData["Furikun"] = [74, 84, 71, 53, 78]
    toCompareData["Noctisrem"] = [68, 85, 76, 59, 77]
    toCompareData["Monochico1"] = [61, 72, 84, 70, 85]
    toCompareData["Asmod3ous"] = [79, 71, 76, 45, 79]
    toCompareData["Naberus"] = [72, 87, 75, 31, 77]

    labelCompare = toCompare
    dataCompare = toCompareData[toCompare]
    var marksData = {
    labels: ["Damage", "Speed", "Bruiser", "Support", "Resume"],
    datasets: [{
        label: "Tú",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: d5
    }, {
        label: toCompare,
        backgroundColor: "rgba(0,0,200,0.2)",
        data: dataCompare
    }]
    };

    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 25,
                    stepSize: 5
                }
            },
            layout: {
                padding: {
                    left: 50,
		    right: 50
                }
            }
        }

    });

       text = text +  "\n"

    text = text + "Damage: " + d5[0] + " (" + dataCompare[0] + ")\n"
    text = text + "Speed: " + d5[1] + " ("  + dataCompare[1]  + ")\n"
    text = text + "Bruiser: " + d5[2]  + " (" + dataCompare[2]  + ")\n"
    text = text + "Support: " + d5[3]  + " (" + dataCompare[3]  + ")\n"
    text = text + "Quantity: " + d5[4] + " ("  + dataCompare[4]  + ")\n"
    d5_s = d5.slice()
    d5_s.sort();

    overall = (d5_s[1]*0.15 + d5_s[2]*0.15+d5_s[3]*0.2+d5_s[4]*0.5)
    text = text + "Resume: " + overall + "\n"

    text = text +  "\n"
    text = text + "\n"

   if (!dontshow_topspeed){
    text = text + "Máximo Speed: " + Math.max(...top_speed) + "\n"
   }
    text = text + "Max. ATK (flat): "  + Math.max(...top_Attack) + "\n"
    text = text + "Max. ATK %: "  + Math.max(...top_AttackPercent) + "\n"
    text = text + "Max. Critical Chance: "  + Math.max(...top_CriticalHitChancePercent) + "\n"
    text = text + "Max. Critical Damage: "  + Math.max(...top_CriticalHitDamagePercent) + "\n"
    text = text + "Max. Defense (flat): "  + Math.max(...top_Defense) + "\n"
    text = text + "Max. Defense %: "  + Math.max(...top_DefensePercent) + "\n"
    text = text + "Max. Health (flat): "  + Math.max(...top_Health) + "\n"
    text = text + "Max. Health %: "  + Math.max(...top_HealthPercent) + "\n"
    text = text + "Max. Efectiveness: "  + Math.max(...top_EffectivenessPercent) + "\n"
    text = text + "Max. Effect Resist: "  + Math.max(...top_EffectResistancePercent) + "\n"
    text = text + "Penta roll ATK (flat): " + total_roll_5_attack + "\n"
    text = text + "Penta roll Health (flat): " + total_roll_5_health + "\n"
    text = text + "Penta Roll Defense (flat): " + total_roll_5_def + "\n"

    text = text + "6 rolls Efectiveness/Effect Resist: " + total_roll_6_eff + "\n"
    text = text + "Gear Wasted e/er (65-): " + total_roll_6_eff_65 + "\n"


threekindoms = [
 {
   "name": "曹操",
   "0": 99.57265,
   "1": 70.79772,
   "2": 97.4359,
   "3": 99.1453,
   "4": 99.7151
 },
 {
   "name": "周瑜",
   "0": 99.85755,
   "1": 66.95157,
   "2": 99.28775,
   "3": 94.15954,
   "4": 98.71795
 },
 {
   "name": "呂蒙",
   "0": 98.2906,
   "1": 88.31909,
   "2": 96.2963,
   "3": 80.48433,
   "4": 90.88319
 },
 {
   "name": "陸遜",
   "0": 99.57265,
   "1": 61.53846,
   "2": 99.00285,
   "3": 95.29915,
   "4": 97.4359
 },
 {
   "name": "鄧艾",
   "0": 99.28775,
   "1": 95.01425,
   "2": 96.2963,
   "3": 88.88889,
   "4": 63.81766
 },
 {
   "name": "司馬懿",
   "0": 100,
   "1": 48.5755,
   "2": 99.28775,
   "3": 98.8604,
   "4": 95.58405
 },
 {
   "name": "孫堅",
   "0": 99.00285,
   "1": 96.72365,
   "2": 74.50142,
   "3": 69.23077,
   "4": 97.86325
 },
 {
   "name": "姜維",
   "0": 97.86325,
   "1": 96.15385,
   "2": 96.8661,
   "3": 58.68946,
   "4": 86.89459
 },
 {
   "name": "羊祜",
   "0": 97.86325,
   "1": 50.5698,
   "2": 92.73504,
   "3": 95.29915,
   "4": 96.72365
 },
 {
   "name": "程普",
   "0": 93.44729,
   "1": 85.89744,
   "2": 85.75499,
   "3": 71.36752,
   "4": 94.01709
 },
 {
   "name": "陸抗",
   "0": 98.2906,
   "1": 48.5755,
   "2": 95.01425,
   "3": 92.87749,
   "4": 95.58405
 },
 {
   "name": "諸葛亮",
   "0": 98.71795,
   "1": 30.05698,
   "2": 100,
   "3": 99.4302,
   "4": 98.0057
 },
 {
   "name": "郭淮",
   "0": 96.0114,
   "1": 84.18803,
   "2": 88.74644,
   "3": 74.21652,
   "4": 82.19373
 },
 {
   "name": "關羽",
   "0": 99.4302,
   "1": 99.57265,
   "2": 77.77778,
   "3": 49.4302,
   "4": 98.71795
 },
 {
   "name": "陳泰",
   "0": 93.44729,
   "1": 74.21652,
   "2": 94.44444,
   "3": 80.48433,
   "4": 82.19373
 },
 {
   "name": "孫權",
   "0": 81.48148,
   "1": 57.69231,
   "2": 87.03704,
   "3": 97.29345,
   "4": 99.4302
 },
 {
   "name": "趙雲",
   "0": 98.2906,
   "1": 99.28775,
   "2": 79.77208,
   "3": 54.2735,
   "4": 89.31624
 },
 {
   "name": "徐庶",
   "0": 93.44729,
   "1": 50.5698,
   "2": 98.14815,
   "3": 87.32194,
   "4": 89.31624
 },
 {
   "name": "盧植",
   "0": 95.1567,
   "1": 48.5755,
   "2": 90.02849,
   "3": 92.87749,
   "4": 89.31624
 },
 {
   "name": "孫策",
   "0": 98.71795,
   "1": 97.7208,
   "2": 58.83191,
   "3": 61.82336,
   "4": 98.0057
 },
 {
   "name": "滿寵",
   "0": 93.44729,
   "1": 50.5698,
   "2": 90.02849,
   "3": 92.16524,
   "4": 86.89459
 },
 {
   "name": "曹丕",
   "0": 65.52707,
   "1": 66.95157,
   "2": 91.73789,
   "3": 94.15954,
   "4": 90.88319
 },
 {
   "name": "劉備",
   "0": 79.91453,
   "1": 74.21652,
   "2": 74.50142,
   "3": 80.48433,
   "4": 100
 },
 {
   "name": "張遼",
   "0": 99.00285,
   "1": 97.7208,
   "2": 83.33333,
   "3": 45.1567,
   "4": 83.76068
 },
 {
   "name": "司馬師",
   "0": 88.88889,
   "1": 50.5698,
   "2": 95.58405,
   "3": 89.88604,
   "4": 83.76068
 },
 {
   "name": "司馬昭",
   "0": 81.48148,
   "1": 41.88034,
   "2": 95.01425,
   "3": 96.5812,
   "4": 86.89459
 },
 {
   "name": "張任",
   "0": 96.8661,
   "1": 92.16524,
   "2": 83.33333,
   "3": 46.72365,
   "4": 79.62963
 },
 {
   "name": "張角",
   "0": 95.1567,
   "1": 19.37322,
   "2": 94.44444,
   "3": 87.32194,
   "4": 99.85755
 },
 {
   "name": "蔣琬",
   "0": 85.04274,
   "1": 27.63533,
   "2": 92.73504,
   "3": 98.8604,
   "4": 89.31624
 },
 {
   "name": "徐盛",
   "0": 96.0114,
   "1": 88.31909,
   "2": 83.33333,
   "3": 54.2735,
   "4": 71.50997
 },
 {
   "name": "賈逵",
   "0": 85.04274,
   "1": 45.4416,
   "2": 92.73504,
   "3": 92.87749,
   "4": 77.20798
 },
 {
   "name": "張寶",
   "0": 92.73504,
   "1": 66.95157,
   "2": 88.74644,
   "3": 52.99145,
   "4": 90.88319
 },
 {
   "name": "曹真",
   "0": 96.0114,
   "1": 77.49288,
   "2": 55.55556,
   "3": 66.52422,
   "4": 96.2963
 },
 {
   "name": "諸葛瑾",
   "0": 79.91453,
   "1": 27.63533,
   "2": 88.74644,
   "3": 97.29345,
   "4": 97.4359
 },
 {
   "name": "鄧芝",
   "0": 74.64387,
   "1": 38.46154,
   "2": 88.74644,
   "3": 92.87749,
   "4": 96.2963
 },
 {
   "name": "諸葛誕",
   "0": 90.17094,
   "1": 70.79772,
   "2": 64.67236,
   "3": 74.21652,
   "4": 90.88319
 },
 {
   "name": "費禕",
   "0": 83.47578,
   "1": 24.35897,
   "2": 91.73789,
   "3": 98.5755,
   "4": 92.30769
 },
 {
   "name": "杜預",
   "0": 94.58689,
   "1": 24.35897,
   "2": 93.87464,
   "3": 87.32194,
   "4": 89.31624
 },
 {
   "name": "王濬",
   "0": 90.17094,
   "1": 74.21652,
   "2": 82.05128,
   "3": 64.52991,
   "4": 77.20798
 },
 {
   "name": "曹叡",
   "0": 71.79487,
   "1": 38.46154,
   "2": 90.02849,
   "3": 89.88604,
   "4": 96.2963
 },
 {
   "name": "郝昭",
   "0": 97.29345,
   "1": 85.89744,
   "2": 83.33333,
   "3": 49.4302,
   "4": 68.66097
 },
 {
   "name": "夏侯惇",
   "0": 97.29345,
   "1": 96.72365,
   "2": 39.31624,
   "3": 61.82336,
   "4": 89.31624
 },
 {
   "name": "荀攸",
   "0": 74.64387,
   "1": 20.22792,
   "2": 98.5755,
   "3": 96.5812,
   "4": 93.16239
 },
 {
   "name": "沮授",
   "0": 85.04274,
   "1": 28.49003,
   "2": 96.8661,
   "3": 97.29345,
   "4": 74.50142
 },
 {
   "name": "嚴顏",
   "0": 87.46439,
   "1": 91.02564,
   "2": 58.83191,
   "3": 58.68946,
   "4": 85.75499
 },
 {
   "name": "司馬攸",
   "0": 69.08832,
   "1": 59.40171,
   "2": 77.77778,
   "3": 78.49003,
   "4": 95.58405
 },
 {
   "name": "袁紹",
   "0": 90.17094,
   "1": 61.53846,
   "2": 61.25356,
   "3": 69.23077,
   "4": 97.4359
 },
 {
   "name": "韓遂",
   "0": 97.29345,
   "1": 64.38746,
   "2": 82.05128,
   "3": 48.5755,
   "4": 86.89459
 },
 {
   "name": "李典",
   "0": 85.04274,
   "1": 83.04843,
   "2": 85.75499,
   "3": 71.36752,
   "4": 53.56125
 },
 {
   "name": "羅憲",
   "0": 94.58689,
   "1": 66.95157,
   "2": 77.77778,
   "3": 66.52422,
   "4": 71.50997
 },
 {
   "name": "孫桓",
   "0": 91.45299,
   "1": 74.21652,
   "2": 68.23362,
   "3": 59.40171,
   "4": 83.76068
 },
 {
   "name": "陳宮",
   "0": 85.04274,
   "1": 40.74074,
   "2": 96.2963,
   "3": 91.31054,
   "4": 58.97436
 },
 {
   "name": "太史慈",
   "0": 91.45299,
   "1": 98.2906,
   "2": 50.71225,
   "3": 45.1567,
   "4": 85.75499
 },
 {
   "name": "黃蓋",
   "0": 87.46439,
   "1": 91.02564,
   "2": 49.28775,
   "3": 54.2735,
   "4": 89.31624
 },
 {
   "name": "賀齊",
   "0": 92.73504,
   "1": 84.18803,
   "2": 68.23362,
   "3": 52.99145,
   "4": 71.50997
 },
 {
   "name": "張既",
   "0": 77.06553,
   "1": 28.49003,
   "2": 77.77778,
   "3": 96.5812,
   "4": 89.31624
 },
 {
   "name": "夏侯霸",
   "0": 87.46439,
   "1": 92.16524,
   "2": 82.05128,
   "3": 41.16809,
   "4": 66.38177
 },
 {
   "name": "徐晃",
   "0": 96.8661,
   "1": 96.72365,
   "2": 74.50142,
   "3": 32.90598,
   "4": 66.38177
 },
 {
   "name": "龐統",
   "0": 85.04274,
   "1": 27.63533,
   "2": 99.57265,
   "3": 92.87749,
   "4": 61.96581
 },
 {
   "name": "孫尚香",
   "0": 71.79487,
   "1": 94.30199,
   "2": 53.84615,
   "3": 51.7094,
   "4": 95.01425
 },
 {
   "name": "鍾會",
   "0": 91.45299,
   "1": 37.60684,
   "2": 97.4359,
   "3": 84.75783,
   "4": 55.27066
 },
 {
   "name": "吳懿",
   "0": 92.73504,
   "1": 74.21652,
   "2": 55.55556,
   "3": 61.82336,
   "4": 82.19373
 },
 {
   "name": "夏侯淵",
   "0": 96.0114,
   "1": 97.29345,
   "2": 36.18234,
   "3": 48.5755,
   "4": 86.89459
 },
 {
   "name": "文聘",
   "0": 95.1567,
   "1": 89.60114,
   "2": 50.71225,
   "3": 60.82621,
   "4": 68.66097
 },
 {
   "name": "張郃",
   "0": 97.86325,
   "1": 96.15385,
   "2": 58.83191,
   "3": 43.87464,
   "4": 66.38177
 },
 {
   "name": "李嚴",
   "0": 92.73504,
   "1": 92.16524,
   "2": 77.77778,
   "3": 71.36752,
   "4": 29.05983
 },
 {
   "name": "審配",
   "0": 93.44729,
   "1": 44.15954,
   "2": 91.73789,
   "3": 69.23077,
   "4": 63.81766
 },
 {
   "name": "賈詡",
   "0": 95.1567,
   "1": 36.03989,
   "2": 99.57265,
   "3": 92.87749,
   "4": 38.17664
 },
 {
   "name": "梁習",
   "0": 74.64387,
   "1": 31.62393,
   "2": 72.07977,
   "3": 95.29915,
   "4": 86.89459
 },
 {
   "name": "步騭",
   "0": 71.79487,
   "1": 37.60684,
   "2": 92.73504,
   "3": 94.15954,
   "4": 63.81766
 },
 {
   "name": "公孫瓚",
   "0": 93.44729,
   "1": 91.02564,
   "2": 61.25356,
   "3": 31.19658,
   "4": 82.19373
 },
 {
   "name": "司馬孚",
   "0": 65.52707,
   "1": 29.77208,
   "2": 79.77208,
   "3": 84.75783,
   "4": 94.01709
 },
 {
   "name": "馬騰",
   "0": 91.45299,
   "1": 87.17949,
   "2": 31.33903,
   "3": 46.72365,
   "4": 96.72365
 },
 {
   "name": "張悌",
   "0": 57.54986,
   "1": 33.33333,
   "2": 87.03704,
   "3": 80.48433,
   "4": 92.30769
 },
 {
   "name": "黃忠",
   "0": 95.1567,
   "1": 98.2906,
   "2": 41.88034,
   "3": 37.74929,
   "4": 77.20798
 },
 {
   "name": "楊阜",
   "0": 57.54986,
   "1": 37.03704,
   "2": 91.73789,
   "3": 80.48433,
   "4": 82.19373
 },
 {
   "name": "鍾繇",
   "0": 65.52707,
   "1": 17.94872,
   "2": 79.77208,
   "3": 98.2906,
   "4": 86.89459
 },
 {
   "name": "劉馥",
   "0": 51.7094,
   "1": 36.32479,
   "2": 72.07977,
   "3": 95.29915,
   "4": 92.30769
 },
 {
   "name": "陸凱",
   "0": 53.27635,
   "1": 45.4416,
   "2": 83.33333,
   "3": 92.87749,
   "4": 71.50997
 },
 {
   "name": "孫登",
   "0": 47.4359,
   "1": 29.77208,
   "2": 85.75499,
   "3": 87.32194,
   "4": 95.58405
 },
 {
   "name": "關興",
   "0": 81.48148,
   "1": 94.30199,
   "2": 44.87179,
   "3": 45.1567,
   "4": 77.20798
 },
 {
   "name": "龐德",
   "0": 88.88889,
   "1": 98.71795,
   "2": 61.25356,
   "3": 29.05983,
   "4": 63.81766
 },
 {
   "name": "呂岱",
   "0": 91.45299,
   "1": 66.95157,
   "2": 58.83191,
   "3": 74.21652,
   "4": 50
 },
 {
   "name": "荀彧",
   "0": 32.62108,
   "1": 10.54131,
   "2": 99.00285,
   "3": 100,
   "4": 98.71795
 },
 {
   "name": "田豐",
   "0": 71.79487,
   "1": 23.36182,
   "2": 98.14815,
   "3": 95.29915,
   "4": 51.7094
 },
 {
   "name": "法正",
   "0": 91.45299,
   "1": 35.75499,
   "2": 98.5755,
   "3": 80.48433,
   "4": 34.04558
 },
 {
   "name": "曹仁",
   "0": 97.29345,
   "1": 94.30199,
   "2": 37.32194,
   "3": 31.19658,
   "4": 79.62963
 },
 {
   "name": "蒯良",
   "0": 60.25641,
   "1": 26.63818,
   "2": 95.58405,
   "3": 89.88604,
   "4": 66.38177
 },
 {
   "name": "朱桓",
   "0": 93.44729,
   "1": 89.60114,
   "2": 72.07977,
   "3": 42.16524,
   "4": 41.16809
 },
 {
   "name": "馬岱",
   "0": 90.17094,
   "1": 93.30484,
   "2": 37.32194,
   "3": 40.17094,
   "4": 74.50142
 },
 {
   "name": "諸葛恪",
   "0": 71.79487,
   "1": 35.75499,
   "2": 96.8661,
   "3": 87.32194,
   "4": 43.01994
 },
 {
   "name": "劉焉",
   "0": 34.61538,
   "1": 30.05698,
   "2": 87.03704,
   "3": 88.88889,
   "4": 94.01709
 },
 {
   "name": "黃月英",
   "0": 31.33903,
   "1": 25.07123,
   "2": 95.58405,
   "3": 95.29915,
   "4": 85.75499
 },
 {
   "name": "鄧忠",
   "0": 71.79487,
   "1": 93.30484,
   "2": 58.83191,
   "3": 41.16809,
   "4": 66.38177
 },
 {
   "name": "王平",
   "0": 92.73504,
   "1": 85.89744,
   "2": 79.77208,
   "3": 45.1567,
   "4": 27.06553
 },
 {
   "name": "馬良",
   "0": 26.49573,
   "1": 17.23647,
   "2": 93.87464,
   "3": 97.7208,
   "4": 95.01425
 },
 {
   "name": "馬雲騄",
   "0": 85.04274,
   "1": 95.7265,
   "2": 35.04274,
   "3": 31.19658,
   "4": 82.19373
 },
 {
   "name": "馬超",
   "0": 96.8661,
   "1": 99.57265,
   "2": 25.35613,
   "3": 11.96581,
   "4": 90.88319
 },
 {
   "name": "程昱",
   "0": 65.52707,
   "1": 36.32479,
   "2": 96.8661,
   "3": 84.75783,
   "4": 39.45869
 },
 {
   "name": "丁奉",
   "0": 90.17094,
   "1": 87.17949,
   "2": 64.67236,
   "3": 41.16809,
   "4": 36.03989
 },
 {
   "name": "高順",
   "0": 94.58689,
   "1": 94.30199,
   "2": 36.75214,
   "3": 31.19658,
   "4": 61.96581
 },
 {
   "name": "闞澤",
   "0": 24.92877,
   "1": 36.32479,
   "2": 91.73789,
   "3": 94.15954,
   "4": 71.50997
 },
 {
   "name": "甘寧",
   "0": 95.1567,
   "1": 98.71795,
   "2": 79.77208,
   "3": 5.413105,
   "4": 39.45869
 },
 {
   "name": "皇甫嵩",
   "0": 96.0114,
   "1": 45.4416,
   "2": 72.07977,
   "3": 36.03989,
   "4": 68.66097
 },
 {
   "name": "郭嘉",
   "0": 31.33903,
   "1": 10.96866,
   "2": 99.85755,
   "3": 92.16524,
   "4": 83.76068
 },
 {
   "name": "董允",
   "0": 27.49288,
   "1": 22.50712,
   "2": 83.33333,
   "3": 98.2906,
   "4": 85.75499
 },
 {
   "name": "孟獲",
   "0": 81.48148,
   "1": 95.01425,
   "2": 22.64957,
   "3": 30.19943,
   "4": 86.89459
 },
 {
   "name": "孫乾",
   "0": 20.79772,
   "1": 26.63818,
   "2": 83.33333,
   "3": 92.16524,
   "4": 93.16239
 },
 {
   "name": "張紘",
   "0": 15.24217,
   "1": 15.66952,
   "2": 94.44444,
   "3": 99.4302,
   "4": 90.88319
 },
 {
   "name": "馬謖",
   "0": 45.1567,
   "1": 57.69231,
   "2": 95.01425,
   "3": 59.40171,
   "4": 57.26496
 },
 {
   "name": "傅僉",
   "0": 74.64387,
   "1": 93.30484,
   "2": 68.23362,
   "3": 31.19658,
   "4": 46.72365
 },
 {
   "name": "閻行",
   "0": 71.79487,
   "1": 92.16524,
   "2": 42.87749,
   "3": 45.1567,
   "4": 61.96581
 },
 {
   "name": "于禁",
   "0": 93.44729,
   "1": 84.18803,
   "2": 61.25356,
   "3": 43.87464,
   "4": 30.91168
 },
 {
   "name": "關索",
   "0": 77.06553,
   "1": 95.7265,
   "2": 33.04843,
   "3": 32.76353,
   "4": 74.50142
 },
 {
   "name": "司馬徽",
   "0": 13.24786,
   "1": 6.837607,
   "2": 97.7208,
   "3": 99.1453,
   "4": 95.01425
 },
 {
   "name": "蔣欽",
   "0": 85.04274,
   "1": 92.16524,
   "2": 31.33903,
   "3": 26.92308,
   "4": 74.50142
 },
 {
   "name": "伊籍",
   "0": 17.52137,
   "1": 17.94872,
   "2": 87.03704,
   "3": 94.15954,
   "4": 93.16239
 },
 {
   "name": "劉諶",
   "0": 43.01994,
   "1": 47.00855,
   "2": 58.83191,
   "3": 69.23077,
   "4": 90.88319
 },
 {
   "name": "雍闓",
   "0": 90.17094,
   "1": 79.62963,
   "2": 36.18234,
   "3": 42.16524,
   "4": 58.97436
 },
 {
   "name": "韓當",
   "0": 81.48148,
   "1": 93.30484,
   "2": 37.32194,
   "3": 36.03989,
   "4": 58.97436
 },
 {
   "name": "蒯越",
   "0": 27.49288,
   "1": 21.36752,
   "2": 90.02849,
   "3": 96.5812,
   "4": 71.50997
 },
 {
   "name": "凌統",
   "0": 83.47578,
   "1": 96.15385,
   "2": 36.75214,
   "3": 23.93162,
   "4": 66.38177
 },
 {
   "name": "曹彰",
   "0": 91.45299,
   "1": 96.72365,
   "2": 19.80057,
   "3": 18.80342,
   "4": 79.62963
 },
 {
   "name": "曹沖",
   "0": 18.80342,
   "1": 14.67236,
   "2": 93.87464,
   "3": 84.75783,
   "4": 92.30769
 },
 {
   "name": "樂進",
   "0": 88.88889,
   "1": 92.16524,
   "2": 33.04843,
   "3": 36.03989,
   "4": 53.56125
 },
 {
   "name": "顧雍",
   "0": 24.92877,
   "1": 13.39031,
   "2": 87.03704,
   "3": 97.7208,
   "4": 79.62963
 },
 {
   "name": "劉虞",
   "0": 37.03704,
   "1": 26.63818,
   "2": 58.83191,
   "3": 80.48433,
   "4": 98.0057
 },
 {
   "name": "張魯",
   "0": 31.33903,
   "1": 20.22792,
   "2": 72.07977,
   "3": 80.48433,
   "4": 96.72365
 },
 {
   "name": "張昭",
   "0": 20.08547,
   "1": 0.854701,
   "2": 92.73504,
   "3": 99.85755,
   "4": 86.89459
 },
 {
   "name": "魏延",
   "0": 90.17094,
   "1": 97.7208,
   "2": 58.83191,
   "3": 34.33048,
   "4": 19.23077
 },
 {
   "name": "劉表",
   "0": 28.34758,
   "1": 25.07123,
   "2": 64.67236,
   "3": 88.88889,
   "4": 92.30769
 },
 {
   "name": "張邈",
   "0": 32.62108,
   "1": 39.45869,
   "2": 61.25356,
   "3": 71.36752,
   "4": 94.01709
 },
 {
   "name": "張燕",
   "0": 91.45299,
   "1": 88.31909,
   "2": 35.04274,
   "3": 32.90598,
   "4": 50
 },
 {
   "name": "鮑三娘",
   "0": 71.79487,
   "1": 91.02564,
   "2": 37.32194,
   "3": 20.22792,
   "4": 77.20798
 },
 {
   "name": "張苞",
   "0": 79.91453,
   "1": 95.01425,
   "2": 29.05983,
   "3": 31.19658,
   "4": 58.97436
 },
 {
   "name": "華雄",
   "0": 90.17094,
   "1": 97.7208,
   "2": 37.32194,
   "3": 23.93162,
   "4": 38.17664
 },
 {
   "name": "卞氏",
   "0": 21.65242,
   "1": 17.94872,
   "2": 74.50142,
   "3": 76.63818,
   "4": 95.58405
 },
 {
   "name": "文鴦",
   "0": 81.48148,
   "1": 97.29345,
   "2": 41.88034,
   "3": 15.66952,
   "4": 50
 },
 {
   "name": "袁渙",
   "0": 18.09117,
   "1": 13.10541,
   "2": 68.23362,
   "3": 91.31054,
   "4": 92.30769
 },
 {
   "name": "許劭",
   "0": 8.974359,
   "1": 8.689459,
   "2": 74.50142,
   "3": 97.7208,
   "4": 90.88319
 },
 {
   "name": "徐氏",
   "0": 24.21652,
   "1": 12.25071,
   "2": 87.03704,
   "3": 61.82336,
   "4": 93.16239
 },
 {
   "name": "劉曄",
   "0": 21.65242,
   "1": 25.64103,
   "2": 97.7208,
   "3": 69.23077,
   "4": 61.96581
 },
 {
   "name": "蔡琰",
   "0": 5.413105,
   "1": 8.689459,
   "2": 79.77208,
   "3": 87.32194,
   "4": 94.01709
 },
 {
   "name": "郭氏",
   "0": 19.51567,
   "1": 3.846154,
   "2": 85.75499,
   "3": 71.36752,
   "4": 94.01709
 },
 {
   "name": "紀靈",
   "0": 85.04274,
   "1": 91.02564,
   "2": 31.33903,
   "3": 32.90598,
   "4": 34.04558
 },
 {
   "name": "周泰",
   "0": 81.48148,
   "1": 97.29345,
   "2": 29.05983,
   "3": 22.22222,
   "4": 43.01994
 },
 {
   "name": "董襲",
   "0": 71.79487,
   "1": 93.30484,
   "2": 30.62678,
   "3": 32.90598,
   "4": 43.01994
 },
 {
   "name": "蔣濟",
   "0": 28.34758,
   "1": 33.33333,
   "2": 93.87464,
   "3": 78.49003,
   "4": 36.03989
 },
 {
   "name": "陳武",
   "0": 77.06553,
   "1": 95.01425,
   "2": 24.50142,
   "3": 23.93162,
   "4": 46.72365
 },
 {
   "name": "崔州平",
   "0": 5.413105,
   "1": 3.846154,
   "2": 83.33333,
   "3": 92.16524,
   "4": 82.19373
 },
 {
   "name": "小喬",
   "0": 8.974359,
   "1": 9.259259,
   "2": 72.07977,
   "3": 78.49003,
   "4": 98.0057
 },
 {
   "name": "貂蟬",
   "0": 4.415954,
   "1": 20.22792,
   "2": 88.74644,
   "3": 54.2735,
   "4": 99.1453
 },
 {
   "name": "大喬",
   "0": 10.25641,
   "1": 8.689459,
   "2": 68.23362,
   "3": 80.48433,
   "4": 98.0057
 },
 {
   "name": "祝融",
   "0": 77.06553,
   "1": 93.30484,
   "2": 8.831909,
   "3": 10.82621,
   "4": 74.50142
 },
 {
   "name": "虞翻",
   "0": 24.92877,
   "1": 34.90028,
   "2": 94.44444,
   "3": 88.88889,
   "4": 20.65527
 },
 {
   "name": "王祥",
   "0": 14.52991,
   "1": 14.10256,
   "2": 55.55556,
   "3": 80.48433,
   "4": 93.16239
 },
 {
   "name": "于吉",
   "0": 5.413105,
   "1": 3.846154,
   "2": 50.71225,
   "3": 96.5812,
   "4": 99.4302
 },
 {
   "name": "顏良",
   "0": 87.46439,
   "1": 98.2906,
   "2": 22.64957,
   "3": 15.66952,
   "4": 30.91168
 },
 {
   "name": "賈充",
   "0": 35.47009,
   "1": 25.07123,
   "2": 96.2963,
   "3": 92.87749,
   "4": 1.566952
 },
 {
   "name": "李儒",
   "0": 45.1567,
   "1": 20.22792,
   "2": 98.14815,
   "3": 74.21652,
   "4": 13.24786
 },
 {
   "name": "夏侯令女",
   "0": 11.82336,
   "1": 8.262108,
   "2": 72.07977,
   "3": 64.52991,
   "4": 93.16239
 },
 {
   "name": "董卓",
   "0": 77.06553,
   "1": 95.01425,
   "2": 58.83191,
   "3": 6.267806,
   "4": 11.82336
 },
 {
   "name": "呂玲綺",
   "0": 90.17094,
   "1": 96.15385,
   "2": 16.95157,
   "3": 5.413105,
   "4": 36.03989
 },
 {
   "name": "張飛",
   "0": 94.58689,
   "1": 99.85755,
   "2": 9.68661,
   "3": 8.404558,
   "4": 19.23077
 },
 {
   "name": "甄氏",
   "0": 8.119658,
   "1": 1.709402,
   "2": 64.67236,
   "3": 56.83761,
   "4": 99.1453
 },
 {
   "name": "周倉",
   "0": 47.4359,
   "1": 92.16524,
   "2": 22.64957,
   "3": 16.95157,
   "4": 43.01994
 },
 {
   "name": "呂布",
   "0": 96.0114,
   "1": 100,
   "2": 7.264957,
   "3": 2.706553,
   "4": 14.81481
 },
 {
   "name": "許褚",
   "0": 53.27635,
   "1": 99.28775,
   "2": 15.52707,
   "3": 6.695157,
   "4": 41.16809
 },
 {
   "name": "文醜",
   "0": 85.04274,
   "1": 98.71795,
   "2": 6.410256,
   "3": 11.68091,
   "4": 13.24786
 },
 {
   "name": "華佗",
   "0": 2.849003,
   "1": 5.413105,
   "2": 55.55556,
   "3": 66.52422,
   "4": 63.81766
 },
 {
   "name": "左慈",
   "0": 4.415954,
   "1": 8.262108,
   "2": 98.5755,
   "3": 9.82906,
   "4": 46.72365
 },
 {
   "name": "沙摩柯",
   "0": 43.01994,
   "1": 92.16524,
   "2": 6.410256,
   "3": 3.133903,
   "4": 18.23362
 }
]
    d_tk = [d5[2],(d5[0]*0.3+d5[1]*0.7), (d5[3]*0.7+d5[1]*0.3), d5[3],d5[4]]
    var lowestDiff = 100000
    var bestFitTK = ""
    for (var i = 0; i < threekindoms.length; i++){
        var char = threekindoms[i];
  
        var diff = 0
        for (var j = 0; j < 4; j++){
             if (((d5[0] >= d5[3]) &&(j !=3)) || ((d5[0] < d5[3]) &&(j !=1))) {
                 diff += (d_tk[j] - char[j]) * (d_tk[j] - char[j])
             }
        }
        var rmse = Math.sqrt(diff/4)
        if (rmse < lowestDiff){
            lowestDiff = rmse
            bestFitTK = char['name']
        }

    }
    if (total_roll_6_eff >= 20 && total_roll_6_eff_65>=10 && total90 > 600 && total90 <=900 &&
     d5[1]>=90 && d5[1]<=95 ){
        text = text + "New Name by Pei: PEI EL SUPREMO" + "\n"
    }else{
         text = text + "New Name by Pei: " + bestFitTK + "\n"
    }


	document.getElementById('result').value = text;


    enhanceMap = {"Weapon":[],"Helmet":[], "Armor":[], "Necklace":[], "Ring":[]}
    for (var i = 0; i < items.length; i++){
        var obj = items[i];
        var speed = obj['reforgedStats']["Speed"];
        var enhance = obj["enhance"]
        var level = obj["level"]
        var rank = obj["rank"]
        var set = obj["set"]
        var gear = obj["gear"]
        if (gear == "Boots"){
            continue
        }
        if (enhance == 15){
            continue
        }
        if (rank == "Epic" && enhance == 12 && level == 85){
            if (set == "SpeedSet" && speed >=13){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=15){
             enhanceMap[gear].push(obj)
            }
        }
        if (rank == "Heroic" && enhance == 12 && level == 85){
            if (set == "SpeedSet" && speed >=13){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=15){
                enhanceMap[gear].push(obj)
            }
        }

        if (rank == "Epic" && enhance == 9 && level == 85){
            if (set == "SpeedSet" && speed >=9){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=11){
             enhanceMap[gear].push(obj)
            }
        }
        if (rank == "Heroic" && enhance == 9 && level == 85){
            if (set == "SpeedSet" && speed >=13){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=15){
                enhanceMap[gear].push(obj)
            }
        }

        if (rank == "Epic" && enhance == 6 && level == 85){
            if (set == "SpeedSet" && speed >=5){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=7){
             enhanceMap[gear].push(obj)
            }
        }
        if (rank == "Heroic" && enhance == 6 && level == 85){
            if (set == "SpeedSet" && speed >=9){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=11){
                enhanceMap[gear].push(obj)
            }
        }

         if (rank == "Epic" && enhance == 3 && level == 85){
            if (set == "SpeedSet" && speed >=2){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=2){
             enhanceMap[gear].push(obj)
            }
        }
        if (rank == "Heroic" && enhance == 3 && level == 85){
            if (set == "SpeedSet" && speed >=5){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=7){
                enhanceMap[gear].push(obj)
            }
        }

/*
         if (rank == "Epic" && enhance == 0 && level == 85){
            if (set == "SpeedSet" && speed >=2){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=2){
             enhanceMap[gear].push(obj)
            }
        }
        if (rank == "Heroic" && enhance == 0 && level == 85){
            if (set == "SpeedSet" && speed >=2){
                enhanceMap[gear].push(obj)
            }
            if (set != "SpeedSet" && speed >=3){
                enhanceMap[gear].push(obj)
            }
        }
        */
    }
    toEnhanceText = ""
    transalte = {"Weapon":"Weapon","Helmet":"Helmet", "Armor":"Armor", "Necklace":"Necklace", "Ring":"Ring", "Epic":"Epic", "Heroic":"Heroic"}
    for (var m in enhanceMap){
        objs = enhanceMap[m]
        for (var i = 0; i < objs.length; i++){
            var obj = objs[i];
            var speed = obj['augmentedStats']["Speed"];
            var speedRef = obj['reforgedStats']["Speed"];
            var enhance = obj["enhance"]
            var level = obj["level"]
            var rank = obj["rank"]
            var set = obj["set"]
            var gear = obj["gear"]
            if (gear )


            toEnhanceText = toEnhanceText + obj["set"] +" " + transalte[rank] + " +" + enhance + " "+ transalte[gear] + " : " + speed +"(" + speedRef + ") Speed" + "\n"   
        }
    }
 
     document.getElementById('result2').value = toEnhanceText;
    
  }
  
  fr.readAsText(files.item(0));
}; 
