var lagu = [
    ['S I J A', 'Senin, 22 Juli 2024', '99T', '100T','sijabrilliance1.png', 'remaja.mp3'],
    ['Brilliance', 'Kamis, 24 Oktober 2024', '130T', '150T', 'sijabrilliance2.png', 'dulukitamasihremaja.mp3'],
    [28, 'Sabtu, 26 April 2025', '90T', '95T', 'sijabrilliance3.png', 'nikmatiperjalanannya.mp3'],
    ['Kita Ke Sana', 'Hindia', '470T', '500T',  'makkah.png', 'kitakesana.mp3 '],
    ['Amin Paling Serius', 'Nadin Amizah & Sal Priadi', '350T', '400T', 'arab.png', 'aminpalingserius.mp3'],
    ['Ramai Sepi Bersama', 'Hindia', '420T', '590T', 'saudi.jpeg', 'ramaisepibersama.mp3'],
    ['Kita', 'Sheila On 7', '54B', '78.7B', 'lily.png', 'kita.mp3'],
    ['Film Favorit', 'Sheila On 7', '67M', '93M', 'llo.png', 'filmfavorit.mp3'],
    ['Memori Baik', 'Sheila On 7', '85B', '97.6B','laut.jpeg', 'memoribaik.mp3'],
    ['Kekal', 'Nadin Amizah', '95.6T', '200T', 'kupu.jpeg', 'kekal.mp3'],
    ['Pilihanku', 'MALIQ & D`Essentials', '675.7B', '865B', '6.jpeg', 'pilihanku.mp3'],
    ['Semua Aku Dirayakan', 'Nadin Amizah', '888T', '900T', 'llp.jpeg', 'semuaakudirayakan.mp3'],    
    ['Separuh Nafas', 'Dewa 19', '745.9B', '988B', 'empat.png', 'separuhnafas.mp3'],
    ['Kenangan Manis', 'Pamungkas', '896T', '945T', 'binn.png', 'kenanganmanis.mp3'],
    ['Dua Sedjoli', 'Dewa 19', '47.8K', '54K', 'duo.png', 'duasedjoli.mp3'],
    ['Kangen', 'Dewa 19', '99T', '100T', '14.png', 'kangen.mp3'],
    ['Kamulah Satu - Satunya', 'MALIQ & D`Essentials & Dewa 19', '99K', '100K', 'galaxy.jpeg', 'kamulahsatusatunya.mp3'],
    ['Aku Milikmu', 'Dewa 19', '700B', '800B', '12.png', 'akumilikmu.mp3'],
    ['Satu - Satunya', 'HIVI!', '99K', '100K', '11.jpeg', 'satu-satunya.mp3'],
    ['Indahnya Dirimu', 'HIVI!', '99.9T', '100T','valee.jpeg', 'indahnyadirimu.mp3'],
    ['Mata Ke Hati', 'HIVI!', '78M', '85M', 'kotak.jpeg', 'matakehati.mp3'],
    ['Untukku', 'Chrisye', '859T', '988T', 'li.png', 'untukku.mp3'],
    ['Cintaku', 'Chrisye', '99T', '100T', '13.png', 'cintaku.mp3'],
    ['Cinta', 'Chrisye', '823K', '957.8K', 'cute.png', 'cinta.mp3'],
    ['Kasih Putih', 'Yovie Widianto & Glenn Fredly', '585B', '723B', '4.jpeg', 'kasihputih.mp3'],
    ['Semenjak Ada Dirimu', 'Yovie Widianto &  HIVI!', '786K', '940K', 'cher.jpeg', 'semenjakadadirimu.mp3'],
    ['Satu Mimpiku', 'Yovie Widianto & The Groove', '897.8K', '953K', 'loepe.png', 'satumimpiku.mp3'],
    ['Perahu Kertas', 'Maudy Ayunda', '46B', '50.8B', '3.jpeg', 'perahukertas.mp3'],
    ['Sempurna', 'Andra & The Backbone', '99T', '100T', '2.png', 'sempurna.mp3'],
    ['Hari Itu', 'Maudy Ayunda', '637K', '752K', '1.png', 'hariitu.mp3'],
    ['Bergema Sampai Selamanya', 'Nadhif Basalamah', '70.9T', '87T', 'bkk.jpeg', 'bergemasampaiselamanya.mp3'],
    ['Rahasia Hati', 'Nidji', '646K', '737.5K', 'castle.png', 'rahasiahati.mp3'],
    ['Penjaga Hati', 'Nadhif Basalamah', '90T', '100T', 'pat.jpeg', 'penjagahati.mp3'],
    ['Mantra', 'Dimansyah Laitupa', '65K', '150K', '7.jpeg', 'mantra.mp3'],
    ['Kau', 'The 90s Mates', '72.8K', '84K', '17.jpeg', 'kau.mp3'],
    ['Aku, Kamu Dan Samudra', 'Rebellion Rose', '99.9T', '100T', '10.jpeg', 'akukamudansamudra.mp3'],
];

var element = '';
  
for(let i = 0; i < lagu.length; i++) {
    element += `
        <div class="lagu">
            <h2>${lagu[i][0]}</h2>
            <small><i>Oleh ${lagu[i][1]}</i></small>
            <img src="${lagu[i][4]}" alt="">
            <audio id="audio${i}" src="${lagu[i][5]}"></audio>
            <div class="bawah">
                <div class="kanan">${lagu[i][2]}</div>
                    <button onclick="putarLagu(${i})" class="play-button">
                    <img id="icon${i}" src="play.png" alt="Play" width="40">
                </button>
                <div class="kiri">${lagu[i][3]}</div>
            </div>
        </div>
    `;
}

document.getElementById("container").innerHTML = element;

function putarLagu(index) {
    for (let i = 0; i < lagu.length; i++) {
        let audio = document.getElementById("audio" + i);
        let icon = document.getElementById("icon" + i);
        if (i !== index) {
            audio.pause();
            audio.currentTime = 0;
            icon.src = "play.png";
        }
    }

    let audio = document.getElementById("audio" + index);
    let icon = document.getElementById("icon" + index);

    if (audio.paused) {
        audio.play();
        icon.src = "pause.png";
    } else {
        audio.pause();
        icon.src = "play.png";
    }
}

var konten = document.getElementById("container");

konten.innerHTML = element