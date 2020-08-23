![TEKA](https://www.tekaparquet.com/libftp//uploads/syblog01/url_file/4/Compiled.jpg)
# [FE] TEKA PARQUET

Website Teka Parquet frontend menggunakan framework javascript **vue js**. 
berikut kebutuhan untuk mengembangkan source ini: 

- Editor (contoh: visual studio code, sublime, atom, dll)
- Node versi 10 Keatas
- yarn

## Instalasi

Untuk instalasi gunakan command ``` $ yarn install ```

## Serve 

untuk menjalankan source menggunakan command berikut:

- ``` $ yarn serve ```
- ``` $ npx webpack-dev-server ```

## Deploy

menggunakan command ``` $ yarn build ```
setelah proses build selesai, akan ada folder ```www/wwwteka```. isi dari folder tersebut merupakan static file beserta assetsnya, pindahkan isinya ke public_html. berikut isi dari folder tersebut:

- assets
- index.html
- app.js

### Konfigurasi Server

> **Note:** Jika Anda menerapkan ke subfolder, Anda perlu menyesuaikan contoh di bawah ini untuk menggunakan subfolder dan bukan folder root (misalnya, mengganti RewriteBase / dengan RewriteBase / nama-subfolder /).

- Apache
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
- Nginx
``` 
location / {
  try_files $uri $uri/ /index.html;
}
```
- Untuk lainnya anda bisa melihat pada [referensi disini](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)


## Pengembangan

### Struktur proyek
```
teka-client
│   README.md
│   .gitignore
|	package.json
|	webpack.config.js    
│
└───src
	│   .env.production
	│   app.js
	|	index.html
	│
	└───assest (styles, scripts, dan media)
	└───app
		└───components
			|	content.component.html
			|	footer.component.html
			|	header.component.html
		└───pages
			|	about.page.html
			|	content.page.html
			|	gallery.page.html
			|	home.page.html
			|	product.detail.page.html
			|	product.page.html
			|	project.detail.page.html
			|	starter.page.html
		└───services (Api dan storage)
```


### Membuat halaman baru

1. Buat file didalam direktori pages dengan nama file sesuai dengan keinginan anda ``` contoh: halamanku.page.html```
2. Buat route url untuk file baru tersebut dengan cara: 
	2.1. Pada file app.js import file baru yang anda buat 
	``` contoh: import HalamankuPage from @/app/pages/Halamanku.page.html``` 
	2.2. cari code ``` const  router  =  new  VueRouter({...}) ``` di file app.js
	2.3. pada bagian component AppMain, masukan HalamankuPage ke dalam array childern component tersebut.
	2.4. isi objek path dengan karakter bebas tanpa spasi, isikan objek name halamanku.page.html, kemudian isikan objek component dengan import HalamankuPage
	>**Note**: Objek name dapat disiikan dengan karakter bebas tanpa spasi dan objek name bersifat unik. cek kembali penamaan route agar tidak memiliki value yang sama  
	
	2.5 hasil akhirnya akan seperti berikut: 
	``` 
	... 
	import HalamankuPage from @/app/pages/Halamanku.page.html
	...
	const  router  =  new  VueRouter({
		mode: 'history',
			routes: [
				{
					path: ROOT_PATH,
					component: {
						template: "<router-view></router-view>"
					},
					children: [
						{
							path: "",
							component: AppMain,
							children: [
								...
								{
									path: "/halamanku",
									name: "halamanku.page.html",
									component: HalamankuPage
								}
								... 
	```
3. langkah selanjutnya ialah membuat template pada file halamanku.page.html 
4. setelah semua langkah selesai maka buka url localhost:9001/halamanku
	
### Integrasi [BE] 

>**Note**: Tidak support WSDL 

untuk integrasi anda perlu memasukan url api ke .env.production dan membuat fungsi di dalam direktori ```services/api ``` kemudian gunakan axios dalam fungsi tersebut untuk mengkonsumsi api. kemudian fungsi tersebut siap dipanggil.

## Referensi

- [vue js](https://vuejs.org/)
- untuk technical data sheet [pdfmake](http://pdfmake.org/#/)
- [vue router](https://router.vuejs.org/)
- [axios](https://github.com/axios/axios)
