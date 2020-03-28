// HTML Fragments
const mhs = {
    nama: 'Kevin',
    umur: 30,
    nrp: '1234567',
    email: 'kevin@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

document.body.innerHTML = el;
// End HTML Fragments



// Loooping
const mhss = [
    {
        nama: 'Kevin',
        email: 'kevin@gmail.com'
    },
    {
        nama: 'Bowie',
        email: 'bowie@gmail.com'
    }
];

// below we use join() because the results will have ','
const el = `<div class="mhs">
    ${mhs.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    </ul>`).join('')};
</div>`;
// End Looping



// Conditional
const lagu = {
    judul: 'Kau Adalah',
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
};

const el = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`;
// End Conditional



// Nested  / HTML Fragments
const students = {
    nama: 'Kevin',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web', 
        'Analisis dan Perancangan Sistem Informasi', 
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `<ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`;
}

const el = `<div class="student">
    <h2>${students.nama}</h2>
    <span class="semester">Semester ${students.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(students.mataKuliah)}
</div>`;
// End Nested