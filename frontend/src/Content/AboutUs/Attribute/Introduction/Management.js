import React from 'react'

const Management = () => {
  return (
    <div>
        <div className='flex justify-center  text-xl py-10'>
            <p className='w-full text-3xl text-[#3b96a1]  text-center font-bold py-2'>MANAGEMENT</p>
        </div>
        <div className='text-justify px-10 leading-8 pb-10'>
            <div className='mb-4 text-center'>
            KATA PENGANTAR DARI PRESIDEN DIREKTUR
            </div>
            <div className='mb-4 flex justify-center'><img src={require('../../../../Assets/Images/AboutUs/bu_lista.jpeg')} /></div>
            
            <div className='mb-4 text-center'>
            Assalamu’alaikum wr wb,
            </div>
            <div className='mb-4'>
            Puji dan syukur ke hadirat Allah SWT atas berkah dan karunia Nya sehingga Koperasi Konsumen Karyawan PT Aplikanusa Lintasarta atau Kopkarla dapat melalui tahun-tahun yang penuh tantangan ini dan tetap dapat memberikan layanan terbaik bagi seluruh stakeholder.
            </div>
            <div className='mb-4'>
            Melanjutkan proses transformasi yang telah berlangsung sejak beberapa tahun terakhir, serangkaian kegiatan dan program yang bertujuan untuk meningkatkan kompetensi karyawan dilaksanakan guna menghadapi tantangan bisnis yang semakin kompleks.
            </div>
            <div className='mb-4'>
            Kopkarla bertekad untuk lebih produktif, inovatif, bekerja secara efektif dan efisien, menjadi lebih profesional dalam menjalankan tugasnya, dan menjaga kualitas layanan kepada pelanggan.
            </div>
            <div className='mb-4'>
            Dengan segala upaya, kami yakin bahwa Kopkarla akan terus tumbuh secara konsisten, dan menjadi koperasi yang bermanfaat bagi semua stakeholder sesuai dengan Visi & Misi Kopkarla.  
            </div>
            <div className='mb-4 text-center'>
            BENDAHARA/DIREKTUR : Muhammad Sulwan Risan  (kiri), PRESIDEN DIREKTUR : Lista Dewi Soegiharto (tengah), SEKRETARIS/DIREKTUR : Didi Kasmadi (kanan)
            </div>
            <img src={require('../../../../Assets/Images/AboutUs/foto_pengurus.jpeg')} />
            <div>
            MANAJEMEN
            <br />
            DEWAN PENGAWAS
            <br />
            Ketua : Budi Isnindro
            <br />
            Wakil Ketua : Bayu Adi Pramono
            <br />
            Anggota : Raden Agus Setiawan
            <br />
            DIREKTUR
            <br />
            Ketua / Direktur Utama : Lista Dewi Soegiharto
            <br />
            Sekretaris / Direktur : Didi Kasmadi
            <br />
            Bendahara / Direktur : Muhammad Sulwan Risan
            </div>
        </div>
    </div>
  )
}

export default Management
