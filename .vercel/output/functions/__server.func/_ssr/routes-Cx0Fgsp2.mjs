import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShieldCheck, c as Plus, d as Minus, f as Folder, h as ArrowLeftRight, i as Square, l as Mouse, m as Check, o as Settings, p as Copy, r as Trash2, s as Search, t as X, u as Monitor } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cx0Fgsp2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var copy = {
	tr: {
		appName: "SensLab",
		setupTitle: "SensLab Setup",
		version: "Sürüm 1.3.0",
		publisher: "SensLab · RBK",
		recycle: "Geri Dönüşüm",
		setupIcon: "SensLab Setup",
		appIcon: "SensLab",
		uninstallIcon: "SensLab Kaldır",
		taskbarSearch: "Ara",
		langTr: "TR",
		langEn: "EN",
		back: "Geri",
		next: "İleri",
		cancel: "İptal",
		close: "Kapat",
		finish: "Bitir",
		install: "Kur",
		uninstall: "Kaldır",
		repair: "Onar",
		launch: "SensLab’i başlat",
		browse: "Gözat",
		accept: "Lisans sözleşmesini kabul ediyorum",
		welcomeTitle: "SensLab’e hoş geldiniz",
		welcomeLead: "Hassasiyet, DPI, FOV, monitör Hz ve fare yoklama hızını tek laboratuvarda birleştiren RBK Edition. Kurulum yaklaşık 5 MB yer kaplar ve yönetici hesabı gerektirmez.",
		welcomeMeta: "Yerel kurulum · %LOCALAPPDATA% · Uninstall.exe dahil",
		licenseTitle: "Lisans sözleşmesi",
		licenseLead: "Kuruluma devam etmek için sözleşmeyi okuyun ve kabul edin.",
		destTitle: "Kurulum konumu",
		destLead: "SensLab bu klasöre kurulacak. İsterseniz yolu değiştirebilirsiniz.",
		destSpace: "Gerekli alan",
		destSpaceVal: "5,4 MB",
		destHint: "Kurulum klasöründe Uninstall.exe de oluşturulur.",
		locLocal: "Kullanıcı klasörü (önerilen)",
		locProgram: "Program Files (yönetici gerekir)",
		locCustom: "Özel konum",
		optionsTitle: "Kısayollar",
		optionsLead: "Kurulum bittikten sonra SensLab’e nasıl ulaşmak istediğinizi seçin.",
		optDesktop: "Masaüstü kısayolu",
		optDesktopHint: "SensLab simgesi masaüstüne eklenir.",
		optStart: "Başlat menüsü kısayolu",
		optStartHint: "Windows Başlat menüsünden açılabilir.",
		optUninstall: "Kaldırma kısayolu",
		optUninstallHint: "Masaüstüne SensLab Kaldır kısayolu eklenir.",
		optLaunch: "Kurulumdan sonra SensLab’i aç",
		optAllUsers: "Tüm kullanıcılar için kur",
		licenseFoot: "Kurarak SensLab Lisans Sözleşmesi’ni kabul etmiş olursunuz.",
		customize: "Özelleştir",
		progressTitle: "Kuruluyor",
		progressLead: "Dosyalar kopyalanıyor ve Windows kaldırma kaydı yazılıyor.",
		doneTitle: "Kurulum tamamlandı",
		doneLead: "SensLab hazır. Uninstall.exe kurulum klasörüne yazıldı; Windows Ayarları → Uygulamalar üzerinden veya Setup ile kaldırabilirsiniz.",
		alreadyTitle: "SensLab zaten yüklü",
		alreadyLead: "Bu bilgisayarda SensLab 1.3 RBK Edition bulunuyor. Onarmak dosyaları yeniler; kaldırmak kısayolları, kaydı ve Uninstall.exe dahil tüm dosyaları siler.",
		alreadyPath: "Kurulum klasörü",
		unTitle: "SensLab’i kaldır",
		unLead: "SensLab kaldırılsın mı?",
		unConfirm: "Kaldırmayı onayla",
		unProgressTitle: "Kaldırılıyor",
		unProgressLead: "Kısayollar, kayıt ve kurulum klasörü temizleniyor.",
		unDoneTitle: "SensLab kaldırıldı",
		unDoneLead: "Tüm dosyalar ve kısayollar silindi. İsterseniz Setup ile yeniden kurabilirsiniz.",
		removeData: "Kullanıcı verisini de sil",
		files: {
			exe: "SensLab.exe yazılıyor",
			ico: "SensLab.ico çıkarılıyor",
			uninstall: "Uninstall.exe oluşturuluyor",
			desktop: "Masaüstü kısayolu",
			start: "Başlat menüsü kısayolu",
			unShortcut: "Kaldırma kısayolu",
			registry: "HKCU Uninstall kaydı"
		},
		unFiles: {
			app: "SensLab kapatılıyor",
			desktop: "Masaüstü kısayolu siliniyor",
			start: "Başlat menüsü temizleniyor",
			unShortcut: "Kaldırma kısayolu siliniyor",
			registry: "Kaldırma kaydı kaldırılıyor",
			files: "Kurulum klasörü siliniyor"
		},
		appTitle: "SensLab — Precision Lives Here",
		appSubtitle: "RBK Edition v1.3",
		hz: "Yoklama",
		interval: "Aralık",
		jitter: "Jitter",
		stability: "Kararlılık",
		sensor: "Sensör",
		sensorName: "SensLab Optical",
		sensorSpec: "19.000 DPI · 1 ms motion delay",
		rateHint: "Örnekleme hızını seçin — grafik gerçek zamanlı güncellenir.",
		rbkMark: "RBK",
		rbkFooter: "RBK",
		rbkScript: "BUILT FOR BETTER AIM.",
		minimize: "Küçült",
		restore: "Geri yükle",
		tabConvert: "Dönüştür",
		tabGames: "Oyunlar",
		tabMonitor: "Monitör",
		tabMouse: "Fare",
		tabPoll: "Polling",
		tabCalibrate: "Kalibrasyon",
		tabProfiles: "Profiller",
		tabConfidence: "Güven",
		tabPubg: "PUBG Kalibrasyon",
		source: "Kaynak",
		target: "Hedef",
		game: "Oyun",
		dpi: "DPI",
		sensitivity: "Sensitivity",
		fov: "FOV",
		resolution: "Çözünürlük",
		match360: "360° fiziksel",
		match0: "0% odak",
		match50: "50% monitör",
		match100: "100% monitör",
		swap: "Kaynak ↔ Hedef",
		copyOut: "Sonucu kopyala",
		resetLab: "Sıfırla",
		cm360: "cm / 360°",
		edpi: "eDPI",
		measureHint: "Manuel oyun: ölçülen cm/360 girin",
		measureLabel: "Kalibrasyon cm/360",
		applyCal: "Oyuna uygula",
		pubgTitle: "PUBG Battlegrounds kalibrasyon motoru",
		pubgLead: "PUBG lineer yaw kullanmaz. 50 / 800 DPI = 64.3 cm referansına göre logaritmik ölçek.",
		general: "General",
		vertical: "Vertical",
		aim: "Aim",
		ads: "ADS",
		scopes: "Scopelar",
		fromSource: "Kaynak oyundan kalibre et",
		pollStart: "8 sn test — fareyi hareket ettir",
		pollMove: "Ölçülüyor… fareyi sürekli hareket ettir",
		pollIdle: "Hazır",
		pollDone: "Tamamlandı",
		pollNone: "Yeterli hareket yok",
		detectMouse: "Faremı algıla",
		detecting: "Algılanıyor…",
		liveHid: "Canlı HID",
		anyMouse: "AUTO / ANY MOUSE",
		hidHint: "Tarayıcı HID izniyle ürün adını okur; hareketle anlık event hızını ölçer. USB poll Hz tam olarak tarayıcıda görünmez — yakın tahmin gösterilir.",
		games: "Oyun profilleri",
		searchGames: "Oyun ara…",
		monitor: "Monitör",
		copied: "Kopyalandı",
		profileGuard: "Bu oyun sayısal yaw uydurmaz — cm/360 kalibrasyonu gerekir.",
		wordmark: "SENSLAB",
		intel: "ULTIMATE AIM INTELLIGENCE",
		intelSub: "Sensitivity · DPI · FOV · Resolution · Monitor · Mouse · Universal Polling",
		edition: "RBK EDITION",
		v13: "v1.3",
		precision: "PRECISION LIVES HERE.",
		gameLibrary: "Oyun kütüphanesi",
		requestGame: "Oyun iste",
		moreGames: "Daha fazla oyun…",
		requestHint: "Eksik bir oyun mu var? Adını yaz, kütüphaneye taslak olarak ekleyelim.",
		requestPlaceholder: "Oyun adı",
		requestSent: "İstek kaydedildi",
		calibrated: "Kalibre",
		notCalibrated: "Kalibre değil",
		generalSens: "General Sensitivity",
		verticalSens: "Vertical Sensitivity",
		aimSens: "Aim Sensitivity",
		scopedSens: "Scoped Sensitivity",
		adsIndividual: "ADS Sensitivity (Individual)",
		scopeRelative: "Scope Multipliers (Relative)",
		resetDefault: "Varsayılana dön",
		importBtn: "İçe aktar",
		exportBtn: "Dışa aktar",
		applyToGame: "Oyuna uygula",
		calTable: "Kalibrasyon verisi",
		colScope: "Scope",
		colDist: "Mesafe (cm/360°)",
		colPx: "Piksel/360°",
		colSens: "Oyun içi",
		colMult: "Çarpan",
		colCal: "Kalibre",
		fineCal: "İnce kalibrasyon",
		fineCalLead: "Gerçek 360° mesafeni girerek hassasiyeti netleştir.",
		measured360: "Ölçülen 360° mesafe (cm)",
		calMethod: "Kalibrasyon yöntemi",
		calNow: "Şimdi kalibre et",
		methodPad: "Fiziksel (mousepad)",
		methodIngame: "Oyun içi dönüş",
		methodCounts: "Sayaç / counts",
		sysInfo: "Sistem bilgisi",
		refreshBtn: "Yenile",
		native: "Native",
		rawInputPoll: "Raw Input Polling",
		live: "CANLI",
		currentPoll: "Anlık yoklama",
		average: "Ortalama",
		lastInput: "Son girdi",
		rawActive: "Raw Input: Aktif",
		deviceSpecific: "Cihaza özel",
		noSmoothing: "Smoothing yok",
		profilePreview: "Profil önizleme",
		editCrosshair: "Nişangahı düzenle",
		hipfire: "Hipfire",
		monitorTitle: "Monitör",
		monitorLead: "Yenileme hızı, çözünürlük ve panel profili — her oyun kalibrasyonu bu Hz değerini kullanır.",
		refreshRate: "Monitör Hz",
		nativeRes: "Native çözünürlük",
		connection: "Bağlantı",
		detectDisplay: "Ekranı algıla",
		detectedHz: "Ölçülen yenileme",
		dyac: "DyAc / bulanıklık kesici",
		blurReduction: "Hareket netliği",
		mouseTitle: "Fare",
		mouseLead: "DPI ve yoklama hızı (Hz). Canlı ölçüm, seçtiğin hedef Hz ile yan yana durur.",
		pollRate: "Fare Hz",
		liveHz: "Canlı Hz",
		nearestClass: "En yakın sınıf",
		profileMax: "Profil tavanı",
		calTitle: "Kalibrasyon",
		calLead: "Her oyun için 360° mesafe. Ölç, uygula, ADS ve scope satırları otomatik güncellenir.",
		currentCm: "Hesaplanan cm/360°",
		targetSens: "Hedef sensitivity",
		profilesTitle: "Profiller",
		profilesLead: "Oyun + DPI + monitör Hz + fare Hz kombinasyonunu kaydet, yükle, sil.",
		saveProfile: "Profili kaydet",
		profileName: "Profil adı",
		noProfiles: "Kayıtlı profil yok.",
		load: "Yükle",
		delete: "Sil",
		confTitle: "Güven",
		confLead: "Her oyun profilinin yaw kalitesi. Uydurma sabit yok — Manual oyunlar ölçüm ister.",
		yawConst: "Yaw sabiti",
		quality: "Kalite",
		score: "Güven",
		applied: "Oyuna uygulandı — config panoya kopyalandı",
		exported: "Profil dışa aktarıldı",
		imported: "Profil içe aktarıldı",
		profileSaved: "Profil kaydedildi",
		upToDate: "SensLab v1.3 RBK Edition güncel.",
		trayOpen: "SensLab’i aç",
		trayUpdate: "Güncellemeleri denetle",
		traySettings: "Ayarlar",
		trayExit: "Çıkış",
		osLabel: "OS",
		osName: "Windows 11 Pro",
		osBuild: "Build 26100",
		vehiclesSens: "Araç hassasiyeti",
		miscRaw: "Raw Input",
		miscAccel: "Mouse acceleration",
		miscSmooth: "Smoothing",
		miscInvert: "Y eksenini ters çevir",
		advFov: "FOV",
		advRes: "Çözünürlük",
		advNote: "Gelişmiş",
		crosshairColor: "Renk",
		crosshairGap: "Boşluk",
		crosshairLength: "Uzunluk",
		crosshairThick: "Kalınlık",
		crosshairOutline: "Dış çizgi",
		subGeneral: "General",
		subAds: "ADS",
		subScopes: "Scopes",
		subVehicles: "Vehicles",
		subMisc: "Misc",
		subAdvanced: "Advanced",
		noAds: "Bu oyunda ayrı ADS satırı yok. Kalibrasyon hipfire üzerinden yürür.",
		hzUnit: "Hz",
		dpiUnit: "DPI",
		hidConn: "HID",
		scaled: "Scaled",
		selectMonitor: "Monitör seç",
		selectMouse: "Fare seç",
		targetHz: "Hedef Hz",
		measured: "Ölçülen",
		footerLeft: "SENSLAB v1.3  ·  RBK EDITION",
		applyOk: "Uygulandı",
		resetOk: "Varsayılanlara dönüldü",
		settingsLang: "Dil"
	},
	en: {
		appName: "SensLab",
		setupTitle: "SensLab Setup",
		version: "Version 1.3.0",
		publisher: "SensLab · RBK",
		recycle: "Recycle Bin",
		setupIcon: "SensLab Setup",
		appIcon: "SensLab",
		uninstallIcon: "Uninstall SensLab",
		taskbarSearch: "Search",
		langTr: "TR",
		langEn: "EN",
		back: "Back",
		next: "Next",
		cancel: "Cancel",
		close: "Close",
		finish: "Finish",
		install: "Install",
		uninstall: "Uninstall",
		repair: "Repair",
		launch: "Launch SensLab",
		browse: "Browse",
		accept: "I accept the license agreement",
		welcomeTitle: "Welcome to SensLab",
		welcomeLead: "RBK Edition unifies sensitivity, DPI, FOV, monitor Hz and mouse poll rate in one lab. The install is about 5 MB and does not need administrator rights.",
		welcomeMeta: "Per-user install · %LOCALAPPDATA% · includes Uninstall.exe",
		licenseTitle: "License agreement",
		licenseLead: "Read and accept the agreement to continue.",
		destTitle: "Install location",
		destLead: "SensLab will be installed to this folder. You can change the path.",
		destSpace: "Required space",
		destSpaceVal: "5.4 MB",
		destHint: "Uninstall.exe is also created in the install folder.",
		locLocal: "User folder (recommended)",
		locProgram: "Program Files (requires admin)",
		locCustom: "Custom location",
		optionsTitle: "Shortcuts",
		optionsLead: "Choose how you want to open SensLab after setup finishes.",
		optDesktop: "Desktop shortcut",
		optDesktopHint: "Places a SensLab icon on the desktop.",
		optStart: "Start menu shortcut",
		optStartHint: "Pin SensLab to the Windows Start menu.",
		optUninstall: "Uninstall shortcut",
		optUninstallHint: "Adds an Uninstall SensLab shortcut to the desktop.",
		optLaunch: "Launch SensLab when setup finishes",
		optAllUsers: "Install for all users",
		licenseFoot: "By installing, you agree to the SensLab License Agreement.",
		customize: "Customize",
		progressTitle: "Installing",
		progressLead: "Copying files and writing the Windows uninstall entry.",
		doneTitle: "Setup complete",
		doneLead: "SensLab is ready. Uninstall.exe was written to the install folder — remove it from Windows Settings → Apps, or reopen Setup.",
		alreadyTitle: "SensLab is already installed",
		alreadyLead: "SensLab 1.3 RBK Edition is on this PC. Repair rewrites the files; uninstall removes shortcuts, the registry entry, and Uninstall.exe.",
		alreadyPath: "Install folder",
		unTitle: "Uninstall SensLab",
		unLead: "Do you want to uninstall SensLab?",
		unConfirm: "Confirm uninstall",
		unProgressTitle: "Uninstalling",
		unProgressLead: "Removing shortcuts, registry entry, and install folder.",
		unDoneTitle: "SensLab removed",
		unDoneLead: "All files and shortcuts are gone. Re-run Setup anytime to install again.",
		removeData: "Also remove user data",
		files: {
			exe: "Writing SensLab.exe",
			ico: "Extracting SensLab.ico",
			uninstall: "Creating Uninstall.exe",
			desktop: "Desktop shortcut",
			start: "Start menu shortcut",
			unShortcut: "Uninstall shortcut",
			registry: "HKCU Uninstall key"
		},
		unFiles: {
			app: "Closing SensLab",
			desktop: "Removing desktop shortcut",
			start: "Clearing Start menu",
			unShortcut: "Removing uninstall shortcut",
			registry: "Deleting uninstall key",
			files: "Deleting install folder"
		},
		appTitle: "SensLab — Precision Lives Here",
		appSubtitle: "RBK Edition v1.3",
		hz: "Polling",
		interval: "Interval",
		jitter: "Jitter",
		stability: "Stability",
		sensor: "Sensor",
		sensorName: "SensLab Optical",
		sensorSpec: "19,000 DPI · 1 ms motion delay",
		rateHint: "Pick a sample rate — the graph updates in real time.",
		rbkMark: "RBK",
		rbkFooter: "RBK",
		rbkScript: "BUILT FOR BETTER AIM.",
		minimize: "Minimize",
		restore: "Restore",
		tabConvert: "Converter",
		tabGames: "Games",
		tabMonitor: "Monitor",
		tabMouse: "Mouse",
		tabPoll: "Polling",
		tabCalibrate: "Calibration",
		tabProfiles: "Profiles",
		tabConfidence: "Confidence",
		tabPubg: "PUBG Calibration",
		source: "Source",
		target: "Target",
		game: "Game",
		dpi: "DPI",
		sensitivity: "Sensitivity",
		fov: "FOV",
		resolution: "Resolution",
		match360: "360° physical",
		match0: "0% focal",
		match50: "50% monitor",
		match100: "100% monitor",
		swap: "Swap source ↔ target",
		copyOut: "Copy result",
		resetLab: "Reset",
		cm360: "cm / 360°",
		edpi: "eDPI",
		measureHint: "Manual game: enter measured cm/360",
		measureLabel: "Calibration cm/360",
		applyCal: "Apply to game",
		pubgTitle: "PUBG Battlegrounds calibration engine",
		pubgLead: "PUBG is not linear yaw. The log scale is anchored at 50 / 800 DPI = 64.3 cm.",
		general: "General",
		vertical: "Vertical",
		aim: "Aim",
		ads: "ADS",
		scopes: "Scopes",
		fromSource: "Calibrate from source game",
		pollStart: "8s test — move the mouse",
		pollMove: "Measuring… keep the mouse moving",
		pollIdle: "Ready",
		pollDone: "Complete",
		pollNone: "Not enough movement",
		detectMouse: "Detect my mouse",
		detecting: "Detecting…",
		liveHid: "Live HID",
		anyMouse: "AUTO / ANY MOUSE",
		hidHint: "Reads the product name via HID permission and estimates event rate from movement. True USB poll Hz is not exposed in the browser — this is a close live estimate.",
		games: "Game profiles",
		searchGames: "Search game…",
		monitor: "Monitor",
		copied: "Copied",
		profileGuard: "This game will not invent a yaw constant — enter a cm/360 calibration.",
		wordmark: "SENSLAB",
		intel: "ULTIMATE AIM INTELLIGENCE",
		intelSub: "Sensitivity · DPI · FOV · Resolution · Monitor · Mouse · Universal Polling",
		edition: "RBK EDITION",
		v13: "v1.3",
		precision: "PRECISION LIVES HERE.",
		gameLibrary: "Game library",
		requestGame: "Request a game",
		moreGames: "More games…",
		requestHint: "Missing a title? Name it and we’ll keep it as a draft in your library.",
		requestPlaceholder: "Game name",
		requestSent: "Request saved",
		calibrated: "Calibrated",
		notCalibrated: "Not calibrated",
		generalSens: "General Sensitivity",
		verticalSens: "Vertical Sensitivity",
		aimSens: "Aim Sensitivity",
		scopedSens: "Scoped Sensitivity",
		adsIndividual: "ADS Sensitivity (Individual)",
		scopeRelative: "Scope Multipliers (Relative)",
		resetDefault: "Reset to default",
		importBtn: "Import",
		exportBtn: "Export",
		applyToGame: "Apply to game",
		calTable: "Calibration data",
		colScope: "Scope",
		colDist: "Distance (cm/360°)",
		colPx: "Pixels/360°",
		colSens: "In-game sens",
		colMult: "Multiplier",
		colCal: "Calibrated",
		fineCal: "Fine calibration",
		fineCalLead: "Enter your real 360° distance to lock the profile.",
		measured360: "Measured 360° distance (cm)",
		calMethod: "Calibration method",
		calNow: "Calibrate now",
		methodPad: "Physical (mousepad)",
		methodIngame: "In-game turn",
		methodCounts: "Counts",
		sysInfo: "System information",
		refreshBtn: "Refresh",
		native: "Native",
		rawInputPoll: "Raw input polling",
		live: "LIVE",
		currentPoll: "Current polling rate",
		average: "Average",
		lastInput: "Last input",
		rawActive: "Raw Input: Active",
		deviceSpecific: "Device-specific",
		noSmoothing: "No smoothing",
		profilePreview: "Profile preview",
		editCrosshair: "Edit crosshair",
		hipfire: "Hipfire",
		monitorTitle: "Monitor",
		monitorLead: "Refresh rate, resolution and panel profile — every game calibration uses this Hz.",
		refreshRate: "Monitor Hz",
		nativeRes: "Native resolution",
		connection: "Connection",
		detectDisplay: "Detect display",
		detectedHz: "Measured refresh",
		dyac: "DyAc / blur reduction",
		blurReduction: "Motion clarity",
		mouseTitle: "Mouse",
		mouseLead: "DPI and poll rate (Hz). Live measurement sits next to your target Hz.",
		pollRate: "Mouse Hz",
		liveHz: "Live Hz",
		nearestClass: "Nearest class",
		profileMax: "Profile max",
		calTitle: "Calibration",
		calLead: "360° distance for every game. Measure, apply, ADS and scope rows update with it.",
		currentCm: "Computed cm/360°",
		targetSens: "Target sensitivity",
		profilesTitle: "Profiles",
		profilesLead: "Save a game + DPI + monitor Hz + mouse Hz stack, then load or delete it.",
		saveProfile: "Save profile",
		profileName: "Profile name",
		noProfiles: "No saved profiles.",
		load: "Load",
		delete: "Delete",
		confTitle: "Confidence",
		confLead: "Yaw quality per game. No invented constants — manual titles require a measurement.",
		yawConst: "Yaw constant",
		quality: "Quality",
		score: "Confidence",
		applied: "Applied to game — config copied",
		exported: "Profile exported",
		imported: "Profile imported",
		profileSaved: "Profile saved",
		upToDate: "SensLab v1.3 RBK Edition is up to date.",
		trayOpen: "Open SensLab",
		trayUpdate: "Check for updates",
		traySettings: "Settings",
		trayExit: "Exit",
		osLabel: "OS",
		osName: "Windows 11 Pro",
		osBuild: "Build 26100",
		vehiclesSens: "Vehicle sensitivity",
		miscRaw: "Raw Input",
		miscAccel: "Mouse acceleration",
		miscSmooth: "Smoothing",
		miscInvert: "Invert Y axis",
		advFov: "FOV",
		advRes: "Resolution",
		advNote: "Advanced",
		crosshairColor: "Color",
		crosshairGap: "Gap",
		crosshairLength: "Length",
		crosshairThick: "Thickness",
		crosshairOutline: "Outline",
		subGeneral: "General",
		subAds: "ADS",
		subScopes: "Scopes",
		subVehicles: "Vehicles",
		subMisc: "Misc",
		subAdvanced: "Advanced",
		noAds: "This title has no separate ADS rows. Calibration runs through hipfire.",
		hzUnit: "Hz",
		dpiUnit: "DPI",
		hidConn: "HID",
		scaled: "Scaled",
		selectMonitor: "Select monitor",
		selectMouse: "Select mouse",
		targetHz: "Target Hz",
		measured: "Measured",
		footerLeft: "SENSLAB v1.3  ·  RBK EDITION",
		applyOk: "Applied",
		resetOk: "Restored defaults",
		settingsLang: "Language"
	}
};
var LICENSE = {
	tr: `SENSLAB SON KULLANICI LİSANS SÖZLEŞMESİ

Sürüm 1.3.0 · Yayıncı: SensLab / RBK

Bu yazılım, fare sensörünün yoklama (polling) davranışını ve oyun hassasiyetini ölçmek amacıyla kişisel ve ticari olmayan kullanım için lisanslanmıştır.

1. Kurulum, %LOCALAPPDATA%\\Programs\\SensLab altına kullanıcı bazında yapılır.
2. Kurulum, Uninstall.exe üretir ve HKCU kaldırma kaydı yazar.
3. Yazılım “olduğu gibi” sunulur; ölçüm sonuçları donanıma göre değişebilir.
4. Tersine mühendislik, yeniden paketleme veya kötüye kullanım yasaktır.
5. Kaldırmak için Uninstall.exe, SensLab Setup veya Windows Ayarları → Uygulamalar kullanın.

RBK, bu kurulum deneyiminin tasarım ortağıdır.`,
	en: `SENSLAB END-USER LICENSE AGREEMENT

Version 1.3.0 · Publisher: SensLab / RBK

This software is licensed for personal and non-commercial use to measure mouse-sensor polling behaviour and game sensitivity.

1. Installation is per-user under %LOCALAPPDATA%\\Programs\\SensLab.
2. Setup writes Uninstall.exe and an HKCU uninstall registry key.
3. The software is provided as-is; measurements vary by hardware.
4. Reverse engineering, repackaging, or abuse is not permitted.
5. To remove it, use Uninstall.exe, SensLab Setup, or Windows Settings → Apps.

RBK is the design partner for this setup experience.`
};
var PATHS = {
	local: {
		tr: "C:\\Users\\Kullanıcı\\AppData\\Local\\Programs\\SensLab",
		en: "C:\\Users\\You\\AppData\\Local\\Programs\\SensLab"
	},
	program: {
		tr: "C:\\Program Files\\SensLab",
		en: "C:\\Program Files\\SensLab"
	}
};
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function resolvedPath(s) {
	if (s.locKind === "program") return PATHS.program[s.lang];
	if (s.locKind === "custom" && s.customPath.trim()) return s.customPath.trim();
	return PATHS.local[s.lang];
}
var useSetup = create()(persist((set, get) => ({
	lang: "tr",
	installed: false,
	installPath: PATHS.local.tr,
	locKind: "local",
	customPath: PATHS.local.tr,
	desktopShortcut: true,
	startShortcut: true,
	uninstallShortcut: true,
	launchAfter: true,
	accepted: false,
	setupOpen: false,
	setupMin: false,
	setupMode: "install",
	wizard: false,
	removeData: true,
	step: 0,
	busy: false,
	progress: 0,
	progressKey: "",
	appOpen: true,
	appMin: false,
	pollRate: 1e3,
	zSetup: 20,
	zApp: 10,
	zTop: 20,
	setLang: (lang) => set((s) => ({
		lang,
		installPath: s.locKind === "custom" ? s.customPath : s.locKind === "program" ? PATHS.program[lang] : PATHS.local[lang],
		customPath: s.locKind === "custom" ? s.customPath : PATHS.local[lang]
	})),
	openSetup: (mode) => {
		const s = get();
		const z = s.zTop + 1;
		const nextMode = mode ?? (s.installed ? "repair" : "install");
		set({
			setupOpen: true,
			setupMin: false,
			setupMode: nextMode,
			wizard: false,
			step: 0,
			accepted: nextMode !== "install",
			progress: 0,
			progressKey: "",
			zSetup: z,
			zTop: z
		});
	},
	closeSetup: () => set({
		setupOpen: false,
		setupMin: false,
		busy: false,
		step: 0,
		progress: 0
	}),
	minSetup: () => set({ setupMin: true }),
	openApp: () => {
		const z = get().zTop + 1;
		set({
			appOpen: true,
			appMin: false,
			zApp: z,
			zTop: z
		});
	},
	closeApp: () => set({
		appOpen: false,
		appMin: false
	}),
	minApp: () => set({ appMin: true }),
	focusSetup: () => {
		const z = get().zTop + 1;
		set({
			zSetup: z,
			zTop: z,
			setupMin: false
		});
	},
	focusApp: () => {
		const z = get().zTop + 1;
		set({
			zApp: z,
			zTop: z,
			appMin: false
		});
	},
	setStep: (step) => set({ step }),
	setAccepted: (accepted) => set({ accepted }),
	setWizard: (wizard) => set({
		wizard,
		step: 0
	}),
	setRemoveData: (removeData) => set({ removeData }),
	setLoc: (locKind) => set((s) => ({
		locKind,
		installPath: locKind === "program" ? PATHS.program[s.lang] : locKind === "custom" ? s.customPath : PATHS.local[s.lang]
	})),
	setCustomPath: (customPath) => set({
		customPath,
		locKind: "custom",
		installPath: customPath
	}),
	setOpt: (key, v) => set({ [key]: v }),
	setPollRate: (pollRate) => set({ pollRate }),
	runInstall: async () => {
		const s = get();
		if (s.busy) return;
		const files = [
			"exe",
			"ico",
			"uninstall",
			"desktop",
			"start",
			"unShortcut",
			"registry"
		];
		set({
			busy: true,
			setupMode: s.installed ? "repair" : "install",
			step: 4,
			progress: 0,
			progressKey: files[0]
		});
		const n = files.length;
		for (let i = 0; i < n; i++) {
			if (!get().setupOpen) return;
			set({
				progressKey: files[i],
				progress: Math.round(i / n * 100)
			});
			await sleep(380 + (i === 0 || i === 2 ? 220 : 0));
		}
		const path = resolvedPath(get());
		const launch = get().launchAfter;
		set({
			busy: false,
			progress: 100,
			progressKey: "registry",
			installed: true,
			installPath: path,
			step: 5
		});
		if (launch) {
			await sleep(280);
			set({ setupMin: true });
			get().openApp();
		}
	},
	runUninstall: async () => {
		if (get().busy) return;
		const wipe = get().removeData;
		const files = [
			"app",
			"desktop",
			"start",
			"unShortcut",
			"registry",
			"files"
		];
		set({
			busy: true,
			setupMode: "uninstall",
			step: 1,
			progress: 0,
			progressKey: files[0],
			appOpen: false,
			appMin: false
		});
		const n = files.length;
		for (let i = 0; i < n; i++) {
			if (!get().setupOpen) return;
			set({
				progressKey: files[i],
				progress: Math.round(i / n * 100)
			});
			await sleep(340);
		}
		set({
			busy: false,
			progress: 100,
			installed: false,
			step: 2,
			accepted: false,
			locKind: "local",
			removeData: true
		});
		if (wipe) try {
			localStorage.removeItem("senslab-lab-v13");
		} catch {}
	},
	resetWizard: () => set((s) => ({
		step: 0,
		setupMode: s.installed ? "repair" : "install",
		progress: 0,
		progressKey: "",
		accepted: s.installed
	}))
}), {
	name: "senslab-setup",
	partialize: (s) => ({
		lang: s.lang,
		installed: s.installed,
		installPath: s.installPath,
		desktopShortcut: s.desktopShortcut,
		startShortcut: s.startShortcut,
		uninstallShortcut: s.uninstallShortcut,
		launchAfter: s.launchAfter,
		pollRate: s.pollRate
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SensMark({ className }) {
	const gid = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("shrink-0", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: gid,
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0",
					stopColor: "#7af0ff"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "#1bb8d4"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "48",
				height: "48",
				rx: "12",
				fill: "#071422"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: `url(#${gid})`,
				d: "M33.6 15.1c-.6-3.8-4.2-6.4-9.9-6.4-6.6 0-10.8 3.3-10.8 8.3 0 3.8 2.6 6.1 9.3 7.6l2.3.5c4.3 1 6.3 2.2 6.3 4.8 0 3-2.7 4.8-7.3 4.8-4.8 0-7.6-2-8.4-5.7l-5.5.8c1.2 6.3 6.7 10.1 14 10.1 8.1 0 13.3-4 13.3-10.3 0-4.4-2.8-7.2-9.5-8.8l-2.3-.5c-4.2-1-5.8-2.1-5.8-4.4 0-2.6 2.4-4.4 6.4-4.4 3.6 0 6 1.6 6.6 4.4l5.3-.8z"
			})
		]
	});
}
function RbkWatermark({ className, size = "hero" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: cn("pointer-events-none absolute inset-0 overflow-hidden select-none", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("rbk-mark absolute text-fg", size === "hero" ? "rbk-hero top-1/2 left-1/2" : "rbk-panel"),
			children: "RBK"
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none rounded-md transition-[transform,background-color,color,box-shadow,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-fg text-bg shadow-btn hover:bg-fg/92",
			accent: "bg-accent text-accent-fg shadow-btn hover:brightness-110",
			ghost: "text-fg bg-elevated/80 shadow-btn-ghost hover:bg-subtle hover:shadow-border-hover",
			quiet: "text-muted hover:text-fg hover:bg-elevated",
			danger: "bg-danger text-bg shadow-btn hover:brightness-110",
			dangerGhost: "text-danger shadow-btn-ghost hover:bg-danger/12"
		},
		size: {
			sm: "h-9 min-h-9 px-3.5 text-sm",
			md: "h-11 min-h-11 px-5 text-sm",
			lg: "h-12 min-h-12 px-6 text-base",
			icon: "size-9 min-h-9 min-w-9"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, type = "button", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	type,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
function AppWindow({ title, icon, badge, lang, zIndex, onClose, onMinimize, onFocus, footer, children, className, bodyClassName, initial }) {
	const t = copy[lang];
	const [pos, setPos] = (0, import_react.useState)({
		x: initial?.x ?? 0,
		y: initial?.y ?? 0
	});
	const drag = (0, import_react.useRef)(null);
	const onPointerDown = (0, import_react.useCallback)((e) => {
		if (e.target.closest("button")) return;
		onFocus();
		drag.current = {
			px: e.clientX,
			py: e.clientY,
			x: pos.x,
			y: pos.y
		};
		e.currentTarget.setPointerCapture(e.pointerId);
	}, [
		onFocus,
		pos.x,
		pos.y
	]);
	const onPointerMove = (0, import_react.useCallback)((e) => {
		if (!drag.current) return;
		const dx = e.clientX - drag.current.px;
		const dy = e.clientY - drag.current.py;
		setPos({
			x: drag.current.x + dx,
			y: drag.current.y + dy
		});
	}, []);
	const onPointerUp = (0, import_react.useCallback)(() => {
		drag.current = null;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		role: "dialog",
		"aria-label": title,
		onMouseDown: onFocus,
		style: {
			zIndex,
			transform: `translate(${pos.x}px, ${pos.y}px)`
		},
		className: cn("window-frame pointer-events-auto relative flex flex-col overflow-hidden rounded-lg bg-surface shadow-window", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onPointerDown,
				onPointerMove,
				onPointerUp,
				className: "flex h-8 shrink-0 cursor-grab items-center gap-2 border-b border-border bg-elevated/90 px-2 active:cursor-grabbing max-md:cursor-default",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-5 items-center justify-center",
						children: icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs font-medium leading-none",
							children: title
						})
					}),
					badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden rounded-full bg-subtle px-2.5 py-1 text-xs font-medium tracking-wide text-muted sm:inline",
						children: badge
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "quiet",
								size: "icon",
								"aria-label": t.minimize,
								onClick: onMinimize,
								className: "size-8 min-h-8 min-w-8 rounded-none text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "size-3.5",
									strokeWidth: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "quiet",
								size: "icon",
								"aria-label": t.restore,
								className: "hidden size-8 min-h-8 min-w-8 rounded-none text-muted md:inline-flex",
								tabIndex: -1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
									className: "size-3",
									strokeWidth: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "quiet",
								size: "icon",
								"aria-label": t.close,
								onClick: onClose,
								className: "size-8 min-h-8 min-w-8 rounded-none text-muted hover:bg-danger hover:text-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-3.5",
									strokeWidth: 2
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("min-h-0 flex-1 overflow-auto", bodyClassName),
				children
			}),
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 border-t border-border bg-elevated/60 px-4 py-3 sm:px-5",
				children: footer
			}) : null
		]
	});
}
function Progress({ value, className }) {
	const pct = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-2 w-full overflow-hidden rounded-full bg-subtle shadow-border", className),
		role: "progressbar",
		"aria-valuenow": Math.round(pct),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-accent transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
			style: { width: `${pct}%` }
		})
	});
}
function CheckRow({ checked, onChange, title, hint, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		id,
		role: "checkbox",
		"aria-checked": checked,
		onClick: () => onChange(!checked),
		className: cn("flex w-full items-start gap-3 rounded-xl bg-elevated/70 px-3.5 py-3 text-left shadow-border transition-[background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:bg-subtle hover:shadow-border-hover"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs shadow-border transition-colors duration-[var(--motion-quick)]", checked ? "bg-accent text-accent-fg" : "bg-subtle text-transparent"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3.5",
				strokeWidth: 3
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-medium",
				children: title
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-sm text-muted",
				children: hint
			}) : null]
		})]
	});
}
function RadioRow({ selected, onSelect, title, hint, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "radio",
		"aria-checked": selected,
		name,
		onClick: onSelect,
		className: cn("flex w-full items-start gap-3 rounded-xl px-3.5 py-3 text-left shadow-border transition-[background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]", selected ? "bg-subtle shadow-border-hover" : "bg-elevated/70 hover:bg-subtle"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full shadow-border", selected ? "border border-accent" : "bg-subtle"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full transition-transform duration-[var(--motion-quick)]", selected ? "scale-100 bg-accent" : "scale-0 bg-transparent") })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-medium",
				children: title
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block font-mono text-xs text-muted",
				children: hint
			}) : null]
		})]
	});
}
var INSTALL_ORDER = [
	"exe",
	"ico",
	"uninstall",
	"desktop",
	"start",
	"unShortcut",
	"registry"
];
var UNINSTALL_ORDER = [
	"app",
	"desktop",
	"start",
	"unShortcut",
	"registry",
	"files"
];
function SetupBody() {
	const lang = useSetup((s) => s.lang);
	const t = copy[lang];
	const mode = useSetup((s) => s.setupMode);
	const step = useSetup((s) => s.step);
	const installed = useSetup((s) => s.installed);
	const accepted = useSetup((s) => s.accepted);
	const setAccepted = useSetup((s) => s.setAccepted);
	const locKind = useSetup((s) => s.locKind);
	const setLoc = useSetup((s) => s.setLoc);
	const customPath = useSetup((s) => s.customPath);
	const setCustomPath = useSetup((s) => s.setCustomPath);
	const installPath = useSetup((s) => s.installPath);
	const desktopShortcut = useSetup((s) => s.desktopShortcut);
	const startShortcut = useSetup((s) => s.startShortcut);
	const uninstallShortcut = useSetup((s) => s.uninstallShortcut);
	const launchAfter = useSetup((s) => s.launchAfter);
	const setOpt = useSetup((s) => s.setOpt);
	const progress = useSetup((s) => s.progress);
	const progressKey = useSetup((s) => s.progressKey);
	if (installed && mode !== "uninstall" && step === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
		title: t.alreadyTitle,
		lead: t.alreadyLead
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 rounded-xl bg-elevated/80 p-4 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-muted uppercase",
			children: t.alreadyPath
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 font-mono text-sm break-all",
			children: installPath
		})]
	})] });
	if (mode === "uninstall") {
		if (step === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
			title: t.unTitle,
			lead: t.unLead
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-2 text-sm text-muted",
			children: UNINSTALL_ORDER.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-danger/80" }), t.unFiles[k]]
			}, k))
		})] });
		if (step === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressPanel, {
			title: t.unProgressTitle,
			lead: t.unProgressLead,
			progress,
			items: UNINSTALL_ORDER.map((k) => t.unFiles[k]),
			active: UNINSTALL_ORDER.indexOf(progressKey)
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
			title: t.unDoneTitle,
			lead: t.unDoneLead
		});
	}
	if (step === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Split, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
		title: t.welcomeTitle,
		lead: t.welcomeLead
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 text-sm text-muted",
		children: t.welcomeMeta
	})] });
	if (step === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
				title: t.licenseTitle,
				lead: t.licenseLead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "min-h-0 flex-1 overflow-auto rounded-xl bg-elevated/80 p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted shadow-border",
				children: LICENSE[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
				id: "eula",
				checked: accepted,
				onChange: setAccepted,
				title: t.accept
			})
		]
	});
	if (step === 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
				title: t.destTitle,
				lead: t.destLead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "radiogroup",
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioRow, {
						name: "loc",
						selected: locKind === "local",
						onSelect: () => setLoc("local"),
						title: t.locLocal,
						hint: PATHS.local[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioRow, {
						name: "loc",
						selected: locKind === "program",
						onSelect: () => setLoc("program"),
						title: t.locProgram,
						hint: PATHS.program[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioRow, {
						name: "loc",
						selected: locKind === "custom",
						onSelect: () => setLoc("custom"),
						title: t.locCustom,
						hint: customPath
					})
				]
			}),
			locKind === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: t.locCustom
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: customPath,
					onChange: (e) => setCustomPath(e.target.value),
					className: "h-11 w-full rounded-xl bg-elevated px-3.5 font-mono text-sm text-fg shadow-border outline-none focus:ring-2 focus:ring-accent/40"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center justify-between rounded-xl bg-elevated/70 px-3.5 py-3 text-sm shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-4" }), t.destSpace]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: t.destSpaceVal
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-accent" }), t.destHint]
			})
		]
	});
	if (step === 3) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
			title: t.optionsTitle,
			lead: t.optionsLead
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					id: "desk",
					checked: desktopShortcut,
					onChange: (v) => setOpt("desktopShortcut", v),
					title: t.optDesktop,
					hint: t.optDesktopHint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					id: "start",
					checked: startShortcut,
					onChange: (v) => setOpt("startShortcut", v),
					title: t.optStart,
					hint: t.optStartHint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					id: "un",
					checked: uninstallShortcut,
					onChange: (v) => setOpt("uninstallShortcut", v),
					title: t.optUninstall,
					hint: t.optUninstallHint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					id: "launch",
					checked: launchAfter,
					onChange: (v) => setOpt("launchAfter", v),
					title: t.optLaunch
				})
			]
		})]
	});
	if (step === 4) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressPanel, {
		title: t.progressTitle,
		lead: t.progressLead,
		progress,
		items: INSTALL_ORDER.map((k) => t.files[k]),
		active: INSTALL_ORDER.indexOf(progressKey)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
		title: t.doneTitle,
		lead: t.doneLead
	});
}
function Split({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full flex-col justify-start gap-1 pt-1",
		children
	});
}
function CopyBlock({ title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-2xl font-medium tracking-tight text-fg sm:text-3xl",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-base",
		children: lead
	})] });
}
function ProgressPanel({ title, lead, progress, items, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
				title,
				lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: items[Math.max(0, active)] ?? items[items.length - 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-fg",
						children: [Math.round(progress), "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: progress })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-1.5 font-mono text-xs",
				children: items.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: i < active ? "text-accent" : i === active ? "text-fg" : "text-faint",
					children: [i < active ? "OK  " : i === active ? "··  " : "    ", label]
				}, label))
			})
		]
	});
}
function SetupWindow() {
	const lang = useSetup((s) => s.lang);
	const t = copy[lang];
	const installed = useSetup((s) => s.installed);
	const mode = useSetup((s) => s.setupMode);
	const step = useSetup((s) => s.step);
	const busy = useSetup((s) => s.busy);
	const accepted = useSetup((s) => s.accepted);
	const wizard = useSetup((s) => s.wizard);
	const zSetup = useSetup((s) => s.zSetup);
	const closeSetup = useSetup((s) => s.closeSetup);
	const minSetup = useSetup((s) => s.minSetup);
	const focusSetup = useSetup((s) => s.focusSetup);
	const setStep = useSetup((s) => s.setStep);
	const openSetup = useSetup((s) => s.openSetup);
	const runInstall = useSetup((s) => s.runInstall);
	const runUninstall = useSetup((s) => s.runUninstall);
	const openApp = useSetup((s) => s.openApp);
	const setLang = useSetup((s) => s.setLang);
	const setWizard = useSetup((s) => s.setWizard);
	const desktopShortcut = useSetup((s) => s.desktopShortcut);
	const startShortcut = useSetup((s) => s.startShortcut);
	const setOpt = useSetup((s) => s.setOpt);
	const setLoc = useSetup((s) => s.setLoc);
	const locKind = useSetup((s) => s.locKind);
	const removeData = useSetup((s) => s.removeData);
	const setRemoveData = useSetup((s) => s.setRemoveData);
	const simple = !wizard && (mode !== "uninstall" && (step === 0 || step === 4 || step === 5) || mode === "uninstall" && (step === 0 || step === 1 || step === 2));
	const alreadyGate = installed && mode !== "uninstall" && step === 0 && wizard;
	const installDone = mode !== "uninstall" && step === 5;
	const uninstallDone = mode === "uninstall" && step === 2;
	const uninstallConfirm = mode === "uninstall" && step === 0;
	const canNext = wizard && !busy && (step !== 1 || accepted) && !alreadyGate && !installDone && !uninstallDone && !uninstallConfirm;
	function back() {
		if (busy) return;
		if (mode === "uninstall" && step === 0) {
			openSetup("repair");
			return;
		}
		if (step > 0) setStep(step - 1);
	}
	function next() {
		if (!canNext) return;
		if (mode === "uninstall") return;
		if (step === 3) {
			runInstall();
			return;
		}
		if (step < 5) setStep(step + 1);
	}
	const showBack = wizard && !busy && !installDone && !uninstallDone && (step > 0 || uninstallConfirm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppWindow, {
		title: mode === "uninstall" ? t.unTitle : t.setupTitle,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-5" }),
		badge: wizard ? t.version : void 0,
		lang,
		zIndex: zSetup,
		onClose: closeSetup,
		onMinimize: minSetup,
		onFocus: focusSetup,
		className: simple ? "window-setup-simple" : "setup-size",
		bodyClassName: simple ? "min-h-0 overflow-auto" : "setup-split grid min-h-0 overflow-hidden",
		footer: wizard ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {
					lang,
					onChange: setLang,
					tr: t.langTr,
					en: t.langEn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-brand hidden font-medium text-muted sm:inline",
					children: t.rbkFooter
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-wrap items-center justify-end gap-2",
					children: [
						showBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: back,
							disabled: busy,
							children: t.back
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "quiet",
							onClick: closeSetup,
							children: installDone || uninstallDone ? t.finish : t.cancel
						}),
						alreadyGate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "dangerGhost",
							onClick: () => openSetup("uninstall"),
							children: t.uninstall
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "accent",
							onClick: () => void runInstall(),
							children: t.repair
						})] }) : null,
						uninstallConfirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "danger",
							onClick: () => void runUninstall(),
							children: t.unConfirm
						}) : null,
						installDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "accent",
							onClick: openApp,
							children: t.launch
						}) : null,
						canNext ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: step === 3 ? "accent" : "primary",
							onClick: next,
							children: step === 3 ? t.install : t.next
						}) : null
					]
				})
			]
		}) : null,
		children: simple ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleBody, {
			mode,
			step,
			busy,
			installed,
			t,
			lang,
			onLang: setLang,
			desktopShortcut,
			startShortcut,
			allUsers: locKind === "program",
			setOpt,
			setLoc,
			removeData,
			setRemoveData,
			onInstall: () => {
				useSetup.getState().setAccepted(true);
				runInstall();
			},
			onCustomize: () => setWizard(true),
			onUninstall: () => void runUninstall(),
			onCancel: closeSetup,
			onLaunch: openApp,
			onRepair: () => void runInstall(),
			onOpenUninstall: () => openSetup("uninstall")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "relative flex min-h-0 flex-col items-center justify-center overflow-hidden bg-elevated px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-2xl font-semibold tracking-wide",
					children: t.wordmark
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-center text-xs tracking-wide text-accent",
					children: t.intel
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-0 overflow-auto px-5 py-5 sm:px-7 sm:py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-full pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupBody, {})
			}), mode !== "uninstall" && !alreadyGate && step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {
				total: 5,
				current: Math.min(step, 4)
			}) : null]
		})] })
	});
}
function SimpleBody({ mode, step, busy, installed, t, lang, onLang, desktopShortcut, startShortcut, allUsers, setOpt, setLoc, removeData, setRemoveData, onInstall, onCustomize, onUninstall, onCancel, onLaunch, onRepair, onOpenUninstall }) {
	if (mode === "uninstall") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center px-6 py-7 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-2xl font-semibold tracking-wide",
				children: t.wordmark
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: t.unLead
			}),
			step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 w-full text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
					id: "wipe",
					checked: removeData,
					onChange: setRemoveData,
					title: t.removeData
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid w-full grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: onUninstall,
					children: t.uninstall
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: onCancel,
					children: t.cancel
				})]
			})] }) : step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: t.unProgressLead
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: t.unDoneLead
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5",
				variant: "accent",
				onClick: onCancel,
				children: t.finish
			})] })
		]
	});
	if (step === 4) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center px-6 py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-2xl font-semibold",
				children: t.progressTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t.progressLead
			})
		]
	});
	if (step === 5) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center px-6 py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-2xl font-semibold",
				children: t.doneTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t.doneLead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5",
				variant: "accent",
				onClick: onLaunch,
				children: t.launch
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col items-center px-6 py-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-2 right-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {
					lang,
					onChange: onLang,
					tr: t.langTr,
					en: t.langEn
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-3xl font-semibold tracking-wide",
				children: t.wordmark
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs font-semibold tracking-wide text-accent",
				children: t.intel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: t.intelSub
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-xs font-semibold tracking-[0.2em] text-fg",
				children: t.edition
			}),
			installed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid w-full gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "accent",
					onClick: onLaunch,
					children: t.launch
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onRepair,
						disabled: busy,
						children: t.repair
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "dangerGhost",
						onClick: onOpenUninstall,
						children: t.uninstall
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid w-full grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "accent",
						onClick: onInstall,
						disabled: busy,
						children: t.install
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onCustomize,
						children: t.customize
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 w-full space-y-2 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							id: "desk",
							checked: desktopShortcut,
							onChange: (v) => setOpt("desktopShortcut", v),
							title: t.optDesktop
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							id: "start",
							checked: startShortcut,
							onChange: (v) => setOpt("startShortcut", v),
							title: t.optStart
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
							id: "all",
							checked: allUsers,
							onChange: (v) => setLoc(v ? "program" : "local"),
							title: t.optAllUsers
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-faint",
					children: t.licenseFoot
				})
			] })
		]
	});
}
function Dots({ total, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute right-5 bottom-4 hidden gap-1.5 md:flex",
		children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === current ? "h-1.5 w-5 rounded-full bg-accent" : "size-1.5 rounded-full bg-faint/70" }, i))
	});
}
function LangToggle({ lang, onChange, tr, en }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex rounded-md bg-elevated p-0.5 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange("tr"),
			className: lang === "tr" ? "h-7 rounded-sm bg-subtle px-2.5 text-xs font-medium" : "h-7 rounded-sm px-2.5 text-xs font-medium text-muted",
			children: tr
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange("en"),
			className: lang === "en" ? "h-7 rounded-sm bg-subtle px-2.5 text-xs font-medium" : "h-7 rounded-sm px-2.5 text-xs font-medium text-muted",
			children: en
		})]
	});
}
var GAMES = [
	{
		"name": "Valorant",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .07,
		"quality": "Verified",
		"note": "Linear yaw profile",
		"unit": "scalar"
	},
	{
		"name": "Counter-Strike 2",
		"engine": "Source 2",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Linear yaw profile",
		"unit": "scalar"
	},
	{
		"name": "Counter-Strike: GO",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Legacy Source yaw",
		"unit": "scalar"
	},
	{
		"name": "Apex Legends",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Linear yaw profile",
		"unit": "scalar"
	},
	{
		"name": "Overwatch 2",
		"engine": "Blizzard Custom",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "Widely cited community constant",
		"unit": "scalar"
	},
	{
		"name": "Call of Duty: Warzone",
		"engine": "IW",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "Modern CoD family reference",
		"unit": "scalar"
	},
	{
		"name": "Call of Duty: Black Ops 6",
		"engine": "IW",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "CoD family reference",
		"unit": "scalar"
	},
	{
		"name": "Call of Duty: Black Ops 7",
		"engine": "IW",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "CoD family reference",
		"unit": "scalar"
	},
	{
		"name": "Call of Duty: Modern Warfare III",
		"engine": "IW",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "CoD family reference",
		"unit": "scalar"
	},
	{
		"name": "Call of Duty: Modern Warfare II",
		"engine": "IW",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "CoD family reference",
		"unit": "scalar"
	},
	{
		"name": "Rainbow Six Siege",
		"engine": "AnvilNext",
		"mode": "yaw",
		"yaw": .00572958,
		"quality": "Verified",
		"note": "Multiplier-aware game; base hipfire conversion",
		"unit": "scalar"
	},
	{
		"name": "PUBG: Battlegrounds",
		"engine": "Unreal Engine 4",
		"mode": "pubg",
		"yaw": null,
		"quality": "Calibrated",
		"note": "Non-linear sensitivity scale; scope-specific settings. Hipfire calibration uses community reference.",
		"unit": "pubg"
	},
	{
		"name": "Fortnite",
		"engine": "Unreal Engine",
		"mode": "percent",
		"yaw": .0286,
		"quality": "Community-verified",
		"note": "Percent slider; treat as calibrated conversion, not raw scalar",
		"unit": "percent"
	},
	{
		"name": "Delta Force",
		"engine": "Unreal Engine",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "Modern UE shooter reference",
		"unit": "scalar"
	},
	{
		"name": "Marvel Rivals",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "The Finals",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .0055,
		"quality": "Estimate",
		"note": "Empirical / approximation; verify in-game",
		"unit": "scalar"
	},
	{
		"name": "Destiny 2",
		"engine": "Tiger Engine",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "Deadlock",
		"engine": "Source 2",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "FragPunk",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Community-verified",
		"note": "UE-style reference; verify patch behavior",
		"unit": "scalar"
	},
	{
		"name": "ARC Raiders",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Estimate",
		"note": "Profile estimate; verify after major updates",
		"unit": "scalar"
	},
	{
		"name": "Escape from Tarkov",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .005,
		"quality": "Estimate",
		"note": "Horizontal X-axis approximation",
		"unit": "scalar"
	},
	{
		"name": "Halo Infinite",
		"engine": "Slipspace",
		"mode": "yaw",
		"yaw": .0225,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "Team Fortress 2",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Source yaw",
		"unit": "scalar"
	},
	{
		"name": "Quake Live",
		"engine": "id Tech 3",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Quake/Source-style yaw reference",
		"unit": "scalar"
	},
	{
		"name": "Quake Champions",
		"engine": "id Tech",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Community-verified",
		"note": "Common converter reference",
		"unit": "scalar"
	},
	{
		"name": "Titanfall 2",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "Helldivers 2",
		"engine": "Autodesk Stingray",
		"mode": "yaw",
		"yaw": .01,
		"quality": "Estimate",
		"note": "Profile estimate; verify in-game",
		"unit": "scalar"
	},
	{
		"name": "Battlefield 2042",
		"engine": "Frostbite",
		"mode": "yaw",
		"yaw": .002222,
		"quality": "Community-verified",
		"note": "Percentage/slider behavior requires in-game verification",
		"unit": "scalar"
	},
	{
		"name": "Battlefield V",
		"engine": "Frostbite",
		"mode": "yaw",
		"yaw": .002222,
		"quality": "Community-verified",
		"note": "Percentage/slider behavior requires in-game verification",
		"unit": "scalar"
	},
	{
		"name": "Battlefield 1",
		"engine": "Frostbite",
		"mode": "yaw",
		"yaw": .002222,
		"quality": "Community-verified",
		"note": "Percentage/slider behavior requires in-game verification",
		"unit": "scalar"
	},
	{
		"name": "Battlefield 4",
		"engine": "Frostbite",
		"mode": "yaw",
		"yaw": .002222,
		"quality": "Community-verified",
		"note": "Percentage/slider behavior requires in-game verification",
		"unit": "scalar"
	},
	{
		"name": "Battlefield 3",
		"engine": "Frostbite",
		"mode": "yaw",
		"yaw": .002222,
		"quality": "Community-verified",
		"note": "Percentage/slider behavior requires in-game verification",
		"unit": "scalar"
	},
	{
		"name": "Battlefield 6",
		"engine": "Frostbite",
		"mode": "yaw",
		"yaw": .0022,
		"quality": "Estimate",
		"note": "Current community/expected reference; verify against patch",
		"unit": "scalar"
	},
	{
		"name": "Rust",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .11247,
		"quality": "Community-verified",
		"note": "Common Rust sensitivity reference",
		"unit": "scalar"
	},
	{
		"name": "Hunt: Showdown 1896",
		"engine": "CryEngine",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Estimate",
		"note": "Profile estimate; scope behavior varies",
		"unit": "scalar"
	},
	{
		"name": "DOOM Eternal",
		"engine": "id Tech 7",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "DOOM (2016)",
		"engine": "id Tech 6",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Community-verified",
		"note": "Linear reference",
		"unit": "scalar"
	},
	{
		"name": "DOOM: The Dark Ages",
		"engine": "id Tech",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Estimate",
		"note": "Profile estimate",
		"unit": "scalar"
	},
	{
		"name": "Cyberpunk 2077",
		"engine": "REDengine",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Estimate",
		"note": "Profile approximation",
		"unit": "scalar"
	},
	{
		"name": "GTA V",
		"engine": "RAGE",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Estimate",
		"note": "Profile approximation",
		"unit": "scalar"
	},
	{
		"name": "Left 4 Dead 2",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Source yaw",
		"unit": "scalar"
	},
	{
		"name": "Portal 2",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Source yaw",
		"unit": "scalar"
	},
	{
		"name": "Garry's Mod",
		"engine": "Source",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Verified",
		"note": "Source yaw",
		"unit": "scalar"
	},
	{
		"name": "Insurgency: Sandstorm",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .014,
		"quality": "Estimate",
		"note": "Profile estimate",
		"unit": "scalar"
	},
	{
		"name": "Squad",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0093,
		"quality": "Community-verified",
		"note": "Unreal family reference",
		"unit": "scalar"
	},
	{
		"name": "Ready or Not",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0093,
		"quality": "Community-verified",
		"note": "UE profile family",
		"unit": "scalar"
	},
	{
		"name": "Hell Let Loose",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0093,
		"quality": "Community-verified",
		"note": "UE profile family",
		"unit": "scalar"
	},
	{
		"name": "Ground Branch",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0093,
		"quality": "Community-verified",
		"note": "UE profile family",
		"unit": "scalar"
	},
	{
		"name": "DayZ",
		"engine": "Enfusion",
		"mode": "yaw",
		"yaw": .0179,
		"quality": "Community-verified",
		"note": "Common converter reference",
		"unit": "scalar"
	},
	{
		"name": "Arma 3",
		"engine": "Real Virtuality",
		"mode": "yaw",
		"yaw": .0179,
		"quality": "Community-verified",
		"note": "Common converter reference",
		"unit": "scalar"
	},
	{
		"name": "Arma Reforger",
		"engine": "Enfusion",
		"mode": "yaw",
		"yaw": .0179,
		"quality": "Community-verified",
		"note": "Common converter reference",
		"unit": "scalar"
	},
	{
		"name": "Palworld",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "UE-style reference",
		"unit": "scalar"
	},
	{
		"name": "Sea of Thieves",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "UE-style approximation",
		"unit": "scalar"
	},
	{
		"name": "Valheim",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "7 Days to Die",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Unturned",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Deep Rock Galactic",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Warframe",
		"engine": "Evolution Engine",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Enlisted",
		"engine": "Dagor Engine",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Payday 2",
		"engine": "Diesel",
		"mode": "yaw",
		"yaw": .0143,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Payday 3",
		"engine": "Unreal Engine 4",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "PlanetSide 2",
		"engine": "Forgelight",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Crysis Remastered",
		"engine": "CryEngine",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Wolfenstein II",
		"engine": "id Tech 6",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "ULTRAKILL",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .0149,
		"quality": "Estimate",
		"note": "Community estimate",
		"unit": "scalar"
	},
	{
		"name": "Unreal Tournament 2004",
		"engine": "Unreal Engine 2",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "UE-family approximation",
		"unit": "scalar"
	},
	{
		"name": "Tribes: Ascend",
		"engine": "Unreal Engine 3",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "UE-family approximation",
		"unit": "scalar"
	},
	{
		"name": "Paladins",
		"engine": "Unreal Engine 3",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Estimate",
		"note": "Community approximation",
		"unit": "scalar"
	},
	{
		"name": "XDefiant",
		"engine": "Snowdrop",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Community-verified",
		"note": "Call-of-Duty-like reference",
		"unit": "scalar"
	},
	{
		"name": "Splitgate 2",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .022,
		"quality": "Estimate",
		"note": "Profile approximation",
		"unit": "scalar"
	},
	{
		"name": "BattleBit Remastered",
		"engine": "Unity",
		"mode": "yaw",
		"yaw": .002222,
		"quality": "Community-verified",
		"note": "Community converter family reference",
		"unit": "scalar"
	},
	{
		"name": "Off The Grid",
		"engine": "Unreal Engine 5",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "UE-style approximation",
		"unit": "scalar"
	},
	{
		"name": "STALZONE",
		"engine": "Unreal Engine",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "UE-style approximation",
		"unit": "scalar"
	},
	{
		"name": "World of Tanks",
		"engine": "BigWorld",
		"mode": "yaw",
		"yaw": .0286,
		"quality": "Estimate",
		"note": "Community approximation",
		"unit": "scalar"
	},
	{
		"name": "Hytale",
		"engine": "Unreal Engine",
		"mode": "yaw",
		"yaw": .0066,
		"quality": "Estimate",
		"note": "Profile approximation",
		"unit": "scalar"
	},
	{
		"name": "Arena Breakout: Infinite",
		"engine": "Unreal Engine",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual profile; use in-game calibration",
		"unit": "manual"
	},
	{
		"name": "Gray Zone Warfare",
		"engine": "Unreal Engine 5",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "STALKER 2: Heart of Chornobyl",
		"engine": "Unreal Engine 5",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Squad 44",
		"engine": "Unreal Engine 4",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Bodycam",
		"engine": "Unreal Engine 5",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Marauders",
		"engine": "Unreal Engine",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Battlefield Hardline",
		"engine": "Frostbite",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Legacy profile; verify in-game",
		"unit": "manual"
	},
	{
		"name": "Star Wars Battlefront II",
		"engine": "Frostbite",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Star Wars Battlefront",
		"engine": "Frostbite",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "The Division 2",
		"engine": "Snowdrop",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "The Division",
		"engine": "Snowdrop",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Borderlands 3",
		"engine": "Unreal Engine 4",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "DOOM 3",
		"engine": "id Tech 4",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Wolfenstein: The New Order",
		"engine": "id Tech 5",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Metro Exodus",
		"engine": "4A Engine",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Insurgency",
		"engine": "Source",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Day of Infamy",
		"engine": "Source",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Rising Storm 2: Vietnam",
		"engine": "Unreal Engine 3",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Killing Floor 2",
		"engine": "Unreal Engine 3",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Black Mesa",
		"engine": "Source",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "S.T.A.L.K.E.R.: Call of Pripyat",
		"engine": "X-Ray",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Chivalry 2",
		"engine": "Unreal Engine 4",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Mordhau",
		"engine": "Unreal Engine 4",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Foxhole",
		"engine": "Unity",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Battle Brothers",
		"engine": "Unity",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "Pavlov VR",
		"engine": "Unreal Engine 4",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	},
	{
		"name": "VRChat",
		"engine": "Unity",
		"mode": "manual",
		"yaw": null,
		"quality": "Manual",
		"note": "Manual calibration recommended",
		"unit": "manual"
	}
];
var FEATURED = [
	"PUBG: Battlegrounds",
	"Valorant",
	"Counter-Strike 2",
	"Apex Legends",
	"Call of Duty: Warzone",
	"Rainbow Six Siege",
	"Fortnite",
	"Overwatch 2",
	"The Finals",
	"Escape from Tarkov",
	"Destiny 2",
	"Marvel Rivals",
	"Counter-Strike: GO",
	"Battlefield 2042",
	"Helldivers 2"
];
var LABELS = {
	"Call of Duty: Warzone": "Call of Duty",
	"Counter-Strike: GO": "CS2 (Legacy)"
};
var SHORT = {
	"PUBG: Battlegrounds": "PUBG",
	Valorant: "VAL",
	"Counter-Strike 2": "CS2",
	"Apex Legends": "APX",
	"Call of Duty: Warzone": "COD",
	"Rainbow Six Siege": "R6",
	Fortnite: "FN",
	"Overwatch 2": "OW2",
	"The Finals": "FIN",
	"Escape from Tarkov": "EFT",
	"Destiny 2": "D2",
	"Marvel Rivals": "MR",
	"Counter-Strike: GO": "CS",
	"Battlefield 2042": "BF",
	"Helldivers 2": "HD2"
};
var PUBG_SCOPES = [
	{
		id: "x1",
		label: "1x",
		def: 35,
		mult: 1
	},
	{
		id: "x2",
		label: "2x",
		def: 32,
		mult: .9
	},
	{
		id: "x3",
		label: "3x",
		def: 28,
		mult: .8
	},
	{
		id: "x4",
		label: "4x",
		def: 24,
		mult: .7
	},
	{
		id: "x6",
		label: "6x",
		def: 20,
		mult: .6
	},
	{
		id: "x8",
		label: "8x",
		def: 18,
		mult: .55
	},
	{
		id: "x15",
		label: "15x",
		def: 18,
		mult: .4
	}
];
var APEX_SCOPES = [
	{
		id: "x1",
		label: "1x",
		def: 1,
		mult: 1
	},
	{
		id: "x2",
		label: "2x",
		def: 1,
		mult: .9
	},
	{
		id: "x3",
		label: "3x",
		def: 1,
		mult: .85
	},
	{
		id: "x4",
		label: "4x",
		def: 1,
		mult: .8
	},
	{
		id: "x6",
		label: "6x",
		def: 1,
		mult: .7
	},
	{
		id: "x8",
		label: "8x",
		def: 1,
		mult: .65
	},
	{
		id: "x10",
		label: "10x",
		def: 1,
		mult: .55
	}
];
var R6_SCOPES = [
	{
		id: "x1",
		label: "1.0x",
		def: 50,
		mult: .6
	},
	{
		id: "x15",
		label: "1.5x",
		def: 50,
		mult: .55
	},
	{
		id: "x2",
		label: "2.0x",
		def: 50,
		mult: .5
	},
	{
		id: "x25",
		label: "2.5x",
		def: 50,
		mult: .45
	},
	{
		id: "x3",
		label: "3.0x",
		def: 50,
		mult: .4
	},
	{
		id: "x4",
		label: "4.0x",
		def: 50,
		mult: .35
	},
	{
		id: "x5",
		label: "5.0x",
		def: 50,
		mult: .3
	},
	{
		id: "x12",
		label: "12x",
		def: 50,
		mult: .22
	}
];
var COD_SCOPES = [
	{
		id: "ads",
		label: "ADS",
		def: 1,
		mult: 1
	},
	{
		id: "low",
		label: "Low",
		def: 1,
		mult: .95
	},
	{
		id: "high",
		label: "High",
		def: 1,
		mult: .9
	},
	{
		id: "x2",
		label: "2x",
		def: 1,
		mult: .85
	},
	{
		id: "x3",
		label: "3x",
		def: 1,
		mult: .75
	},
	{
		id: "x4",
		label: "4x",
		def: 1,
		mult: .65
	},
	{
		id: "x6",
		label: "6x",
		def: 1,
		mult: .55
	},
	{
		id: "x8",
		label: "8x",
		def: 1,
		mult: .45
	}
];
var TARKOV_SCOPES = [
	{
		id: "ads",
		label: "ADS",
		def: 1,
		mult: 1
	},
	{
		id: "x1",
		label: "1x",
		def: 1,
		mult: .95
	},
	{
		id: "x2",
		label: "2x",
		def: 1,
		mult: .85
	},
	{
		id: "x4",
		label: "4x",
		def: 1,
		mult: .7
	},
	{
		id: "x6",
		label: "6x",
		def: 1,
		mult: .6
	},
	{
		id: "x8",
		label: "8x",
		def: 1,
		mult: .5
	},
	{
		id: "x12",
		label: "12x",
		def: 1,
		mult: .4
	},
	{
		id: "x16",
		label: "16x",
		def: 1,
		mult: .32
	}
];
function genericScopes(p) {
	if (p.mode === "percent") return [
		{
			id: "ads",
			label: "Targeting",
			def: 50,
			mult: 1
		},
		{
			id: "scope",
			label: "Scope",
			def: 45,
			mult: .9
		},
		{
			id: "sniper",
			label: "Sniper",
			def: 40,
			mult: .75
		}
	];
	return [{
		id: "ads",
		label: "ADS",
		def: 1,
		mult: 1
	}, {
		id: "scoped",
		label: "Scoped",
		def: 1,
		mult: .8
	}];
}
function hipFor(p) {
	if (p.mode === "pubg") return {
		min: 1,
		max: 100,
		step: 1,
		def: 50
	};
	if (p.mode === "percent") return {
		min: 1,
		max: 100,
		step: .1,
		def: 12
	};
	if (p.name === "Valorant") return {
		min: .01,
		max: 5,
		step: .01,
		def: .4
	};
	if (p.name.startsWith("Call of Duty")) return {
		min: .1,
		max: 20,
		step: .01,
		def: 6
	};
	if (p.name === "Rainbow Six Siege") return {
		min: 1,
		max: 100,
		step: 1,
		def: 12
	};
	if (p.name === "Overwatch 2") return {
		min: .5,
		max: 100,
		step: .1,
		def: 15
	};
	if (p.name === "Escape from Tarkov") return {
		min: .1,
		max: 3,
		step: .01,
		def: .4
	};
	if (p.engine.includes("Source")) return {
		min: .01,
		max: 8,
		step: .01,
		def: 1
	};
	if (p.mode === "manual") return {
		min: 1,
		max: 100,
		step: .1,
		def: 50
	};
	return {
		min: .01,
		max: 20,
		step: .01,
		def: 1
	};
}
var OVERRIDES = {
	"PUBG: Battlegrounds": {
		hip: {
			min: 1,
			max: 100,
			step: 1,
			def: 43
		},
		hipLabel: "General Sensitivity",
		hasAim: true,
		aimDef: 41,
		hasScoped: true,
		scopedDef: 40,
		hasVehicles: true,
		scopes: PUBG_SCOPES,
		fov: 80,
		fovType: "vertical"
	},
	Valorant: {
		hip: {
			min: .01,
			max: 5,
			step: .01,
			def: .4
		},
		hipLabel: "Sensitivity",
		scopes: [
			{
				id: "ads",
				label: "ADS",
				def: 1,
				mult: 1
			},
			{
				id: "x25",
				label: "2.5x",
				def: 1,
				mult: .9
			},
			{
				id: "x5",
				label: "5x",
				def: 1,
				mult: .8
			}
		],
		fov: 103,
		fovType: "horizontal"
	},
	"Counter-Strike 2": {
		hipLabel: "sensitivity",
		scopes: [{
			id: "zoom",
			label: "zoom_sensitivity",
			def: 1,
			mult: 1
		}],
		fov: 90,
		fovType: "horizontal"
	},
	"Apex Legends": {
		hip: {
			min: .2,
			max: 10,
			step: .1,
			def: 1.5
		},
		hasVehicles: true,
		scopes: APEX_SCOPES,
		fov: 110,
		fovType: "horizontal"
	},
	"Call of Duty: Warzone": {
		hip: {
			min: .1,
			max: 20,
			step: .01,
			def: 6
		},
		hasVehicles: true,
		scopes: COD_SCOPES,
		fov: 120,
		fovType: "horizontal"
	},
	"Rainbow Six Siege": {
		hip: {
			min: 1,
			max: 100,
			step: 1,
			def: 12
		},
		scopes: R6_SCOPES,
		fov: 90,
		fovType: "vertical"
	},
	Fortnite: {
		hip: {
			min: 1,
			max: 100,
			step: .1,
			def: 10
		},
		hipLabel: "X/Y Sensitivity",
		scopes: [
			{
				id: "ads",
				label: "Targeting",
				def: 12,
				mult: 1
			},
			{
				id: "scope",
				label: "Scope",
				def: 10,
				mult: .85
			},
			{
				id: "sniper",
				label: "Sniper",
				def: 8,
				mult: .7
			}
		],
		fov: 80,
		fovType: "horizontal"
	},
	"Overwatch 2": {
		hip: {
			min: .5,
			max: 100,
			step: .1,
			def: 15
		},
		scopes: [{
			id: "ads",
			label: "Relative aim",
			def: 100,
			mult: 1
		}],
		fov: 103,
		fovType: "horizontal"
	},
	"The Finals": {
		hip: {
			min: .1,
			max: 10,
			step: .01,
			def: 1.2
		},
		scopes: [{
			id: "ads",
			label: "ADS",
			def: 1,
			mult: 1
		}],
		fov: 90,
		fovType: "vertical"
	},
	"Escape from Tarkov": {
		hip: {
			min: .1,
			max: 3,
			step: .01,
			def: .4
		},
		scopes: TARKOV_SCOPES,
		fov: 75,
		fovType: "vertical"
	},
	"Destiny 2": {
		hip: {
			min: 1,
			max: 20,
			step: .1,
			def: 8
		},
		scopes: [{
			id: "ads",
			label: "ADS",
			def: 1,
			mult: 1
		}, {
			id: "sniper",
			label: "Sniper",
			def: 1,
			mult: .6
		}],
		fov: 105,
		fovType: "horizontal"
	},
	"Marvel Rivals": {
		hip: {
			min: .1,
			max: 10,
			step: .01,
			def: 2
		},
		scopes: [{
			id: "ads",
			label: "ADS",
			def: 1,
			mult: 1
		}],
		fov: 103,
		fovType: "horizontal"
	},
	"Counter-Strike: GO": {
		hipLabel: "sensitivity",
		scopes: [{
			id: "zoom",
			label: "zoom_sensitivity",
			def: 1,
			mult: 1
		}],
		fov: 90,
		fovType: "horizontal"
	},
	"Battlefield 2042": {
		hip: {
			min: 1,
			max: 100,
			step: 1,
			def: 20
		},
		hasVehicles: true,
		scopes: [
			{
				id: "x1",
				label: "1x",
				def: 100,
				mult: 1
			},
			{
				id: "x2",
				label: "2x",
				def: 90,
				mult: .9
			},
			{
				id: "x4",
				label: "4x",
				def: 75,
				mult: .75
			},
			{
				id: "x6",
				label: "6x",
				def: 60,
				mult: .6
			},
			{
				id: "x10",
				label: "10x",
				def: 45,
				mult: .45
			}
		],
		fov: 105,
		fovType: "vertical"
	},
	"Helldivers 2": {
		hip: {
			min: .1,
			max: 5,
			step: .01,
			def: 1
		},
		hasVehicles: true,
		scopes: [{
			id: "ads",
			label: "ADS",
			def: 1,
			mult: 1
		}],
		fov: 90,
		fovType: "horizontal"
	}
};
function shortOf(name) {
	if (SHORT[name]) return SHORT[name];
	const parts = name.replace(/[^a-zA-Z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
	if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
	return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}
function entryFor(name) {
	const p = GAMES.find((g) => g.name === name) ?? GAMES[0];
	const hip = hipFor(p);
	return {
		name: p.name,
		label: LABELS[p.name] ?? p.name,
		short: shortOf(p.name),
		featured: FEATURED.includes(p.name),
		hip,
		hipLabel: "Sensitivity",
		hasVertical: true,
		verticalDef: 1,
		hasAim: false,
		aimDef: hip.def,
		hasScoped: false,
		scopedDef: hip.def,
		hasVehicles: false,
		scopes: genericScopes(p),
		fov: 90,
		fovType: "horizontal",
		...OVERRIDES[p.name],
		name: p.name
	};
}
var CACHE = {};
function defaultSetting(name) {
	if (CACHE[name]) return CACHE[name];
	const e = entryFor(name);
	const ads = {};
	const multipliers = {};
	for (const s of e.scopes) {
		ads[s.id] = s.def;
		multipliers[s.id] = s.mult;
	}
	CACHE[name] = {
		general: e.hip.def,
		vertical: e.verticalDef,
		aim: e.aimDef,
		scoped: e.scopedDef,
		vehicles: e.hip.def,
		ads,
		multipliers,
		calibrated: name === "PUBG: Battlegrounds",
		cm360: 0,
		rawInput: true,
		accel: false,
		smoothing: false,
		invertY: false,
		fov: e.fov
	};
	return CACHE[name];
}
function cloneSetting(name) {
	const d = defaultSetting(name);
	return {
		...d,
		ads: { ...d.ads },
		multipliers: { ...d.multipliers }
	};
}
function libraryGames() {
	return {
		featured: FEATURED.map((n) => GAMES.find((g) => g.name === n)).filter((g) => Boolean(g)),
		rest: GAMES.filter((g) => !FEATURED.includes(g.name))
	};
}
var PUBG_BASE_CM = 64.3;
var RESOLUTIONS = [
	"1280×720",
	"1280×960",
	"1440×1080",
	"1600×900",
	"1680×1050",
	"1920×1080",
	"1920×1200",
	"2560×1080",
	"2560×1440",
	"3440×1440",
	"3840×2160"
];
function clamp(v, a, b) {
	return Math.min(b, Math.max(a, v));
}
function parseRes(v) {
	const [w, h] = v.split("×").map(Number);
	return {
		w: w || 1920,
		h: h || 1080
	};
}
function hfov(view, w, h, type) {
	if (type === "horizontal") return view;
	const r = view * Math.PI / 180;
	return 2 * Math.atan(Math.tan(r / 2) * (w / h)) * 180 / Math.PI;
}
function effectiveSens(p, sens) {
	if (p.mode === "percent") return sens / 100;
	return sens;
}
function pubgCm(dpi, sens) {
	const s = clamp(sens || 50, 1, 100);
	return PUBG_BASE_CM * (800 / dpi) / Math.pow(10, (s - 50) / 50);
}
function pubgSensForCm(dpi, cm) {
	if (!(cm > 0)) return 50;
	return clamp(50 + 50 * Math.log10(PUBG_BASE_CM * (800 / dpi) / cm), 1, 100);
}
function cm360Linear(p, dpi, sens) {
	const es = effectiveSens(p, sens);
	if (!p.yaw || es <= 0) return NaN;
	return 914.4 / (dpi * es * p.yaw);
}
function gameCm(p, dpi, sens) {
	if (p.mode === "pubg") return pubgCm(dpi, sens);
	return cm360Linear(p, dpi, sens);
}
function sensForCm(p, dpi, cm) {
	if (p.mode === "pubg") return pubgSensForCm(dpi, cm);
	if (!p.yaw) return NaN;
	const es = 914.4 / (dpi * cm * p.yaw);
	return p.mode === "percent" ? es * 100 : es;
}
function conversionMultiplier(mode, sf, tf) {
	if (mode === "360") return 1;
	const exp = mode === "0" ? 0 : mode === "0.5" ? .5 : 1;
	const sfv = Math.tan(sf * Math.PI / 360);
	const tfv = Math.tan(tf * Math.PI / 360);
	if (!(sfv > 0 && tfv > 0)) return 1;
	return Math.pow(sfv / tfv, exp);
}
function convert(opts) {
	const sr = parseRes(opts.srcRes);
	const tr = parseRes(opts.dstRes);
	const sf = hfov(opts.srcFov, sr.w, sr.h, opts.srcFovType);
	const tf = hfov(opts.dstFov, tr.w, tr.h, opts.dstFovType);
	const manual = opts.src.mode === "manual" || opts.dst.mode === "manual";
	const measured = opts.measuredCm && opts.measuredCm > 0 ? opts.measuredCm : void 0;
	if (manual && !measured) return {
		target: NaN,
		cm: NaN,
		sourceCm: NaN,
		edpi: NaN,
		dstHFov: tf,
		manual: true
	};
	let sourceCm = measured ?? gameCm(opts.src, opts.srcDpi, opts.srcSens);
	if (!Number.isFinite(sourceCm)) sourceCm = 35;
	const targetCm = sourceCm * conversionMultiplier(opts.match, sf, tf);
	const target = sensForCm(opts.dst, opts.dstDpi, targetCm);
	const cm = gameCm(opts.dst, opts.dstDpi, target);
	const edpi = opts.dst.mode === "percent" ? opts.dstDpi * (target / 100) : opts.dstDpi * target;
	return {
		target,
		cm,
		sourceCm,
		edpi,
		dstHFov: tf,
		manual: false
	};
}
function pixels360(cm, dpi) {
	if (!(cm > 0) || !(dpi > 0)) return NaN;
	return cm / 2.54 * dpi;
}
function fmtSens(n, step) {
	if (!Number.isFinite(n)) return "—";
	if (step < .05) return n.toFixed(2);
	if (step < 1) return n.toFixed(1);
	return n.toFixed(0);
}
function confidenceScore(q) {
	if (q === "Verified") return 98;
	if (q === "Community-verified") return 86;
	if (q === "Calibrated") return 92;
	if (q === "Manual") return 40;
	return 62;
}
var defaults = {
	tab: "games",
	subTab: "general",
	previewScope: "hip",
	activeGame: "PUBG: Battlegrounds",
	settings: { "PUBG: Battlegrounds": cloneSetting("PUBG: Battlegrounds") },
	srcGame: "Valorant",
	dstGame: "PUBG: Battlegrounds",
	srcDpi: 1600,
	dstDpi: 1600,
	srcSens: .4,
	srcRes: "1920×1080",
	dstRes: "1920×1080",
	srcFov: 103,
	dstFov: 80,
	srcFovType: "horizontal",
	dstFovType: "vertical",
	match: "360",
	measuredCm: "86.7",
	mouse: "Logitech G PRO X SUPERLIGHT 2",
	dpi: 1600,
	mouseHz: 1e3,
	monitorId: "xl2566xp",
	monitorHz: 400,
	monitorRes: "1920×1080",
	monitorNative: true,
	calMethod: "pad",
	gameQuery: "",
	detectedName: "",
	detectedVidPid: "",
	profiles: [],
	crosshair: {
		color: "#2ad4ea",
		gap: 4,
		length: 10,
		thickness: 2,
		outline: true
	},
	libraryExpanded: false,
	requestedGames: []
};
function writeSetting(s, game, next) {
	return {
		...s,
		settings: {
			...s.settings,
			[game]: next
		}
	};
}
var useLab = create()(persist((set, get) => ({
	...defaults,
	setTab: (tab) => set({ tab }),
	setSubTab: (subTab) => set({ subTab }),
	set: (key, value) => set({ [key]: value }),
	setting: (game) => {
		const name = game ?? get().activeGame;
		return get().settings[name] ?? defaultSetting(name);
	},
	patchSetting: (game, patch) => {
		const cur = get().settings[game] ?? cloneSetting(game);
		set((s) => writeSetting(s, game, {
			...cur,
			...patch
		}));
	},
	setAds: (game, id, value) => {
		const cur = get().settings[game] ?? cloneSetting(game);
		set((s) => writeSetting(s, game, {
			...cur,
			ads: {
				...cur.ads,
				[id]: value
			}
		}));
	},
	setMult: (game, id, value) => {
		const cur = get().settings[game] ?? cloneSetting(game);
		set((s) => writeSetting(s, game, {
			...cur,
			multipliers: {
				...cur.multipliers,
				[id]: value
			}
		}));
	},
	calibrateGame: (game, cm) => {
		const dpi = get().dpi || 800;
		let general = sensForCm(GAMES.find((g) => g.name === game) ?? GAMES[0], dpi, cm);
		if (!Number.isFinite(general)) general = get().setting(game).general;
		const cur = get().settings[game] ?? cloneSetting(game);
		set((s) => writeSetting(s, game, {
			...cur,
			general,
			cm360: cm,
			calibrated: true
		}));
		set({ measuredCm: String(cm) });
	},
	resetGame: (game) => {
		set((s) => writeSetting(s, game, cloneSetting(game)));
	},
	applyCmToGame: (game, cm) => {
		get().calibrateGame(game, cm);
		set({
			activeGame: game,
			tab: "games"
		});
	},
	saveProfile: (name) => {
		const s = get();
		const setting = s.settings[s.activeGame] ?? cloneSetting(s.activeGame);
		set({ profiles: [{
			id: `${Date.now()}`,
			name: name.trim() || s.activeGame,
			game: s.activeGame,
			at: Date.now(),
			dpi: s.dpi,
			mouseHz: s.mouseHz,
			monitorHz: s.monitorHz,
			monitorId: s.monitorId,
			mouse: s.mouse,
			setting: {
				...setting,
				ads: { ...setting.ads },
				multipliers: { ...setting.multipliers }
			}
		}, ...s.profiles].slice(0, 24) });
	},
	loadProfile: (id) => {
		const p = get().profiles.find((x) => x.id === id);
		if (!p) return;
		set((s) => ({
			...writeSetting(s, p.game, {
				...p.setting,
				ads: { ...p.setting.ads },
				multipliers: { ...p.setting.multipliers }
			}),
			activeGame: p.game,
			dpi: p.dpi,
			srcDpi: p.dpi,
			dstDpi: p.dpi,
			mouseHz: p.mouseHz,
			monitorHz: p.monitorHz,
			monitorId: p.monitorId,
			mouse: p.mouse,
			tab: "games"
		}));
	},
	deleteProfile: (id) => set({ profiles: get().profiles.filter((p) => p.id !== id) }),
	importSetting: (game, setting) => {
		set((s) => writeSetting(s, game, {
			...cloneSetting(game),
			...setting,
			ads: { ...setting.ads },
			multipliers: { ...setting.multipliers }
		}));
		set({
			activeGame: game,
			tab: "games"
		});
	},
	swap: () => {
		const s = get();
		set({
			srcGame: s.dstGame,
			dstGame: s.srcGame,
			srcDpi: s.dstDpi,
			dstDpi: s.srcDpi,
			srcRes: s.dstRes,
			dstRes: s.srcRes,
			srcFov: s.dstFov,
			dstFov: s.srcFov,
			srcFovType: s.dstFovType,
			dstFovType: s.srcFovType
		});
	},
	reset: () => set({
		...defaults,
		detectedName: get().detectedName,
		detectedVidPid: get().detectedVidPid,
		settings: { "PUBG: Battlegrounds": cloneSetting("PUBG: Battlegrounds") }
	}),
	setDetected: (detectedName, detectedVidPid) => set({
		detectedName,
		detectedVidPid
	})
}), {
	name: "senslab-lab-v13",
	partialize: (s) => ({
		tab: s.tab,
		activeGame: s.activeGame,
		settings: s.settings,
		srcGame: s.srcGame,
		dstGame: s.dstGame,
		srcDpi: s.srcDpi,
		dstDpi: s.dstDpi,
		srcSens: s.srcSens,
		mouse: s.mouse,
		dpi: s.dpi,
		mouseHz: s.mouseHz,
		monitorId: s.monitorId,
		monitorHz: s.monitorHz,
		monitorRes: s.monitorRes,
		monitorNative: s.monitorNative,
		match: s.match,
		profiles: s.profiles,
		crosshair: s.crosshair,
		calMethod: s.calMethod,
		measuredCm: s.measuredCm,
		requestedGames: s.requestedGames
	})
}));
function gameByName(name) {
	return GAMES.find((g) => g.name === name) ?? GAMES[0];
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium tracking-wide text-muted",
			children: label
		}), children]
	});
}
function Select({ value, onChange, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: cn("h-11 w-full rounded-xl bg-elevated px-3 text-sm text-fg shadow-border outline-none focus:ring-2 focus:ring-accent/40", className),
		children
	});
}
function Num({ value, onChange, step = "0.01", min, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "number",
		value: Number.isFinite(value) ? value : "",
		step,
		min,
		max,
		onChange: (e) => onChange(parseFloat(e.target.value)),
		className: "h-11 w-full rounded-xl bg-elevated px-3 text-sm tabular-nums text-fg shadow-border outline-none focus:ring-2 focus:ring-accent/40"
	});
}
function QualityMark({ q }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-xs font-medium", q === "Verified" || q === "Community-verified" ? "text-accent" : q === "Calibrated" ? "text-success" : q === "Manual" ? "text-danger" : "text-muted"),
		children: q
	});
}
var MATCH = [
	{
		id: "360",
		key: "match360"
	},
	{
		id: "0",
		key: "match0"
	},
	{
		id: "0.5",
		key: "match50"
	},
	{
		id: "1",
		key: "match100"
	}
];
function ConvertPanel() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const src = gameByName(lab.srcGame);
	const dst = gameByName(lab.dstGame);
	const measured = parseFloat(lab.measuredCm);
	const result = convert({
		src,
		dst,
		srcDpi: lab.srcDpi || 800,
		dstDpi: lab.dstDpi || lab.dpi || 800,
		srcSens: lab.srcSens || 1,
		srcRes: lab.srcRes,
		dstRes: lab.dstRes,
		srcFov: lab.srcFov || 103,
		dstFov: lab.dstFov || 103,
		srcFovType: lab.srcFovType,
		dstFovType: lab.dstFovType,
		match: lab.match,
		measuredCm: Number.isFinite(measured) && measured > 0 ? measured : void 0
	});
	const engines = Array.from(new Set(GAMES.map((g) => g.engine)));
	const fmt = dst.mode === "pubg" || dst.mode === "percent" ? result.target.toFixed(2) : result.target.toFixed(6);
	async function copyResult() {
		const txt = `SensLab\n${src.name} → ${dst.name}\n${fmt}\n${result.cm.toFixed(2)} cm/360 · ${result.edpi.toFixed(1)} eDPI\nMouse ${lab.mouseHz} Hz · Monitor ${lab.monitorHz} Hz`;
		try {
			await navigator.clipboard.writeText(txt);
			toast.success(t.copied);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: MATCH.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => lab.set("match", m.id),
						className: lab.match === m.id ? "h-9 rounded-md bg-accent px-3.5 text-xs font-medium text-accent-fg" : "h-9 rounded-md bg-elevated px-3.5 text-xs font-medium text-muted shadow-border hover:text-fg",
						children: t[m.key]
					}, m.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Side, {
						title: t.source,
						game: lab.srcGame,
						onGame: (v) => lab.set("srcGame", v),
						dpi: lab.srcDpi,
						onDpi: (v) => lab.set("srcDpi", v),
						sens: lab.srcSens,
						onSens: (v) => lab.set("srcSens", v),
						res: lab.srcRes,
						onRes: (v) => lab.set("srcRes", v),
						fov: lab.srcFov,
						onFov: (v) => lab.set("srcFov", v),
						fovType: lab.srcFovType,
						onFovType: (v) => lab.set("srcFovType", v),
						engines,
						t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Side, {
						title: t.target,
						game: lab.dstGame,
						onGame: (v) => {
							lab.set("dstGame", v);
							lab.set("activeGame", v);
						},
						dpi: lab.dstDpi,
						onDpi: (v) => {
							lab.set("dstDpi", v);
							lab.set("dpi", v);
						},
						res: lab.dstRes,
						onRes: (v) => lab.set("dstRes", v),
						fov: lab.dstFov,
						onFov: (v) => lab.set("dstFov", v),
						fovType: lab.dstFovType,
						onFovType: (v) => lab.set("dstFovType", v),
						engines,
						t,
						hideSens: true
					})]
				}),
				(src.mode === "manual" || dst.mode === "manual") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-elevated/80 p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t.profileGuard
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 max-w-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.measureLabel,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								value: Number.isFinite(measured) ? measured : 0,
								onChange: (v) => lab.set("measuredCm", String(v)),
								step: "0.1",
								min: 1
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: lab.swap,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-4" }), t.swap]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => void copyResult(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), t.copyOut]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "quiet",
							onClick: lab.reset,
							children: t.resetLab
						}),
						Number.isFinite(result.cm) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "accent",
							onClick: () => {
								lab.applyCmToGame(lab.dstGame, result.cm);
								toast.success(t.applied);
							},
							children: t.applyCal
						}) : null
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-md bg-elevated p-5 shadow-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs font-semibold tracking-wider text-muted uppercase",
					children: t.target
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-medium tracking-tight",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl tabular-nums text-accent",
						children: Number.isFinite(result.target) ? fmt : "—"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						entryFor(dst.name).label,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-faint",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityMark, { q: dst.quality })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$2, {
							k: t.cm360,
							v: Number.isFinite(result.cm) ? result.cm.toFixed(2) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$2, {
							k: t.edpi,
							v: Number.isFinite(result.edpi) ? result.edpi.toFixed(1) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$2, {
							k: "H FOV",
							v: `${result.dstHFov.toFixed(1)}°`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$2, {
							k: t.dpi,
							v: String(lab.dstDpi)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$2, {
							k: t.pollRate,
							v: `${lab.mouseHz} Hz`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$2, {
							k: t.refreshRate,
							v: `${lab.monitorHz} Hz`
						})
					]
				})
			]
		})]
	});
}
function Row$2({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums",
			children: v
		})]
	});
}
function Side({ title, game, onGame, dpi, onDpi, sens, onSens, res, onRes, fov, onFov, fovType, onFovType, engines, t, hideSens }) {
	const g = gameByName(game);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 rounded-md bg-elevated/60 p-4 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs font-semibold tracking-wider text-muted uppercase",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityMark, { q: g.quality })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.game,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					value: game,
					onChange: onGame,
					children: engines.map((eng) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
						label: eng,
						children: GAMES.filter((x) => x.engine === eng).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: x.name,
							children: entryFor(x.name).label
						}, x.name))
					}, eng))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.dpi,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						value: dpi,
						onChange: onDpi,
						step: "50",
						min: 50
					})
				}), !hideSens && onSens ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.sensitivity,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						value: sens ?? 0,
						onChange: onSens,
						step: "0.01",
						min: 0
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.resolution,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: res,
						onChange: onRes,
						children: RESOLUTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: r,
							children: r
						}, r))
					})
				})]
			}),
			!hideSens ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t.resolution,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					value: res,
					onChange: onRes,
					children: RESOLUTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: r,
						children: r
					}, r))
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.fov,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
						value: fov,
						onChange: onFov,
						step: "1",
						min: 60,
						max: 180
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "FOV type",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: fovType,
						onChange: (v) => onFovType(v),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "vertical",
							children: "Vertical"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "horizontal",
							children: "Horizontal"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted",
				children: g.note
			})
		]
	});
}
var REFRESH_RATES = [
	60,
	75,
	120,
	144,
	165,
	180,
	240,
	280,
	360,
	400,
	480,
	500,
	540,
	600
];
var POLL_RATES = [
	125,
	250,
	500,
	1e3,
	2e3,
	4e3,
	8e3
];
var MONITORS_CATALOG = [
	{
		id: "xl2566xp",
		brand: "ZOWIE",
		name: "XL2566X+",
		res: ["1920×1080"],
		hz: [360, 400],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "xl2566k",
		brand: "ZOWIE",
		name: "XL2566K",
		res: ["1920×1080"],
		hz: [360],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "xl2546xp",
		brand: "ZOWIE",
		name: "XL2546X+",
		res: ["1920×1080"],
		hz: [240, 280],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "xl2546k",
		brand: "ZOWIE",
		name: "XL2546K",
		res: ["1920×1080"],
		hz: [240],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "xl2586xp",
		brand: "ZOWIE",
		name: "XL2586X+",
		res: ["1920×1080"],
		hz: [540, 600],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "xl2586x",
		brand: "ZOWIE",
		name: "XL2586X",
		res: ["1920×1080"],
		hz: [540],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "xl2731k",
		brand: "ZOWIE",
		name: "XL2731K",
		res: ["1920×1080", "2560×1440"],
		hz: [144, 165],
		native: "2560×1440",
		conn: "DisplayPort"
	},
	{
		id: "pg27aqn",
		brand: "ASUS ROG",
		name: "Swift PG27AQN",
		res: ["2560×1440"],
		hz: [360],
		native: "2560×1440",
		conn: "DisplayPort"
	},
	{
		id: "aw2524h",
		brand: "Alienware",
		name: "AW2524H",
		res: ["1920×1080"],
		hz: [360, 500],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "aw2725df",
		brand: "Alienware",
		name: "AW2725DF",
		res: ["2560×1440"],
		hz: [360],
		native: "2560×1440",
		conn: "DisplayPort"
	},
	{
		id: "g6oled",
		brand: "Samsung",
		name: "Odyssey G6 OLED",
		res: ["2560×1440"],
		hz: [360],
		native: "2560×1440",
		conn: "DisplayPort"
	},
	{
		id: "xg27acq",
		brand: "ASUS",
		name: "TUF VG27AQ",
		res: ["2560×1440"],
		hz: [165, 180],
		native: "2560×1440",
		conn: "DisplayPort"
	},
	{
		id: "generic1080",
		brand: "Generic",
		name: "1080p",
		res: [
			"1920×1080",
			"1600×900",
			"1280×720"
		],
		hz: [
			60,
			75,
			120,
			144,
			165,
			240
		],
		native: "1920×1080",
		conn: "DisplayPort"
	},
	{
		id: "generic1440",
		brand: "Generic",
		name: "1440p",
		res: ["2560×1440", "1920×1080"],
		hz: [
			60,
			144,
			165,
			180,
			240
		],
		native: "2560×1440",
		conn: "DisplayPort"
	},
	{
		id: "uwqhd",
		brand: "Generic",
		name: "Ultrawide 1440p",
		res: ["3440×1440", "2560×1080"],
		hz: [
			60,
			144,
			165,
			240
		],
		native: "3440×1440",
		conn: "DisplayPort"
	},
	{
		id: "detected",
		brand: "Detected",
		name: "This display",
		res: [
			"1920×1080",
			"2560×1440",
			"3840×2160"
		],
		hz: [...REFRESH_RATES],
		native: "1920×1080",
		conn: "Auto"
	}
];
function monitorById(id) {
	return MONITORS_CATALOG.find((m) => m.id === id) ?? MONITORS_CATALOG[0];
}
var MICE = [
	{
		"name": "AUTO / ANY MOUSE",
		"max": null,
		"note": "Polling test is device-agnostic",
		"source": "Native Raw Input"
	},
	{
		"name": "Finalmouse UltralightX",
		"max": 8e3,
		"note": "Up to 8K wireless",
		"source": "Finalmouse"
	},
	{
		"name": "Razer Viper V3 Pro",
		"max": 8e3,
		"note": "Up to 8K with supplied receiver",
		"source": "Razer"
	},
	{
		"name": "Razer DeathAdder V4 Pro",
		"max": 8e3,
		"note": "Up to 8K wired + wireless",
		"source": "Razer"
	},
	{
		"name": "Razer DeathAdder V3 Pro",
		"max": 8e3,
		"note": "Up to 8K with HyperPolling",
		"source": "Razer"
	},
	{
		"name": "Razer Viper V2 Pro",
		"max": 8e3,
		"note": "Receiver/dongle dependent",
		"source": "Razer"
	},
	{
		"name": "Razer Viper 8KHz",
		"max": 8e3,
		"note": "8K wired",
		"source": "Razer"
	},
	{
		"name": "Logitech G PRO X SUPERLIGHT 2",
		"max": 8e3,
		"note": "Up to 8K with compatible firmware/receiver",
		"source": "Logitech G"
	},
	{
		"name": "Logitech G PRO X2 SUPERSTRIKE",
		"max": 8e3,
		"note": "8K report rate",
		"source": "Logitech G"
	},
	{
		"name": "Pulsar X2H v3",
		"max": 8e3,
		"note": "8K dongle required",
		"source": "Pulsar"
	},
	{
		"name": "Pulsar X2H v3 eS",
		"max": 8e3,
		"note": "8K class",
		"source": "Pulsar"
	},
	{
		"name": "Pulsar X2F",
		"max": 8e3,
		"note": "8K wireless class",
		"source": "Pulsar"
	},
	{
		"name": "Pulsar LAB X2F",
		"max": 8e3,
		"note": "Up to 8K",
		"source": "Pulsar"
	},
	{
		"name": "Endgame Gear OP1 8k v2",
		"max": 8e3,
		"note": "1000/2000/4000/8000 Hz",
		"source": "Endgame Gear"
	},
	{
		"name": "Endgame Gear OP1w 4k v2",
		"max": 4e3,
		"note": "Up to 4K",
		"source": "Endgame Gear"
	},
	{
		"name": "Endgame Gear XM2w 4k v2",
		"max": 4e3,
		"note": "Up to 4K",
		"source": "Endgame Gear"
	},
	{
		"name": "WLmouse Beast X",
		"max": 8e3,
		"note": "8K class",
		"source": "WLmouse"
	},
	{
		"name": "WLmouse Beast X Max",
		"max": 8e3,
		"note": "8K class",
		"source": "WLmouse"
	},
	{
		"name": "WLmouse HUAN",
		"max": 8e3,
		"note": "Up to 8K",
		"source": "WLmouse"
	},
	{
		"name": "LAMZU MAYA X",
		"max": 8e3,
		"note": "8K out of box",
		"source": "LAMZU"
	},
	{
		"name": "LAMZU MAYA",
		"max": 8e3,
		"note": "8K dongle compatible",
		"source": "LAMZU"
	},
	{
		"name": "LAMZU Atlantis OG V2 Pro",
		"max": 8e3,
		"note": "8K class",
		"source": "LAMZU"
	},
	{
		"name": "LAMZU Atlantis Mini Pro",
		"max": 8e3,
		"note": "8K class",
		"source": "LAMZU"
	},
	{
		"name": "LAMZU Atlantis Mini 4K",
		"max": 8e3,
		"note": "8K class with high-polling receiver",
		"source": "LAMZU"
	},
	{
		"name": "Corsair SABRE v2 PRO",
		"max": 8e3,
		"note": "Up to 8K wireless/wired",
		"source": "Corsair"
	},
	{
		"name": "ASUS ROG Harpe Ace Extreme",
		"max": 8e3,
		"note": "8K with ROG Polling Rate Booster",
		"source": "ASUS ROG"
	},
	{
		"name": "Scyrox V6",
		"max": 8e3,
		"note": "Up to 8K",
		"source": "Scyrox"
	},
	{
		"name": "ATK Blazing Sky F1 V3",
		"max": 8e3,
		"note": "Up to 8K",
		"source": "ATK"
	},
	{
		"name": "ZOWIE U2-DW",
		"max": 4e3,
		"note": "Up to 4K with enhanced receiver",
		"source": "ZOWIE"
	},
	{
		"name": "ZOWIE EC2-DW",
		"max": 4e3,
		"note": "Receiver dependent",
		"source": "ZOWIE"
	},
	{
		"name": "ZOWIE FK2-DW",
		"max": 4e3,
		"note": "Receiver dependent",
		"source": "ZOWIE"
	},
	{
		"name": "ZOWIE S2-DW",
		"max": 4e3,
		"note": "Receiver dependent",
		"source": "ZOWIE"
	},
	{
		"name": "ZOWIE EC1-DW",
		"max": 4e3,
		"note": "Receiver dependent",
		"source": "ZOWIE"
	},
	{
		"name": "ZOWIE EC3-DW",
		"max": 4e3,
		"note": "Receiver dependent",
		"source": "ZOWIE"
	},
	{
		"name": "Glorious Model O 2 Wireless",
		"max": 4e3,
		"note": "4K class",
		"source": "Glorious"
	},
	{
		"name": "VAXEE XE v2 Wireless",
		"max": 4e3,
		"note": "4K class",
		"source": "VAXEE"
	},
	{
		"name": "SteelSeries Aerox 3 Wireless Gen 2",
		"max": 4e3,
		"note": "Up to 4K",
		"source": "SteelSeries"
	},
	{
		"name": "Razer Viper V3 HyperSpeed",
		"max": 4e3,
		"note": "Up to 4K",
		"source": "Razer"
	}
];
function readDisplay() {
	const s = window.screen;
	const refresh = Number(s.refreshRate) || guessRefresh();
	return {
		width: s.width || window.innerWidth,
		height: s.height || window.innerHeight,
		refresh,
		name: `${s.width}×${s.height}`
	};
}
function guessRefresh() {
	return 60;
}
function measureRefreshRate() {
	return new Promise((resolve) => {
		const times = [];
		let last = 0;
		let frames = 0;
		const tick = (t) => {
			if (last) times.push(t - last);
			last = t;
			frames += 1;
			if (frames < 48) {
				requestAnimationFrame(tick);
				return;
			}
			const slice = times.slice(8);
			const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
			const hz = avg > 0 ? 1e3 / avg : 60;
			const snaps = [
				60,
				75,
				90,
				120,
				144,
				165,
				180,
				240,
				280,
				360,
				400,
				480,
				500,
				540,
				600
			];
			resolve(snaps.reduce((best, r) => Math.abs(r - hz) < Math.abs(best - hz) ? r : best, snaps[0]));
		};
		requestAnimationFrame(tick);
	});
}
function vidpid(d) {
	return `VID ${d.vendorId.toString(16).padStart(4, "0")} · PID ${d.productId.toString(16).padStart(4, "0")}`.toUpperCase();
}
function matchMouseProfile(productName) {
	const n = productName.toLowerCase();
	const hit = MICE.find((m) => m.name !== "AUTO / ANY MOUSE" && n.includes(m.name.toLowerCase().split(" ").slice(0, 2).join(" ")));
	return MICE.find((m) => {
		if (m.name === "AUTO / ANY MOUSE") return false;
		return m.name.toLowerCase().split(/[\s/-]+/).filter((t) => t.length > 2).filter((t) => n.includes(t)).length >= 2;
	}) ?? hit ?? null;
}
async function requestHidMouse() {
	const hid = navigator.hid;
	if (!hid) return null;
	let devices = [];
	try {
		devices = await hid.getDevices();
	} catch {
		devices = [];
	}
	if (!devices.length) try {
		devices = await hid.requestDevice({ filters: [{
			usagePage: 1,
			usage: 2
		}] });
	} catch {
		return null;
	}
	const d = devices[0];
	if (!d) return null;
	const profile = matchMouseProfile(d.productName);
	return {
		name: d.productName || "HID mouse",
		vidpid: vidpid(d),
		profile: profile?.name ?? null
	};
}
function summarizeIntervals(intervals) {
	if (intervals.length < 8) return {
		hz: 0,
		avgMs: 0,
		jitterMs: 0,
		p95Ms: 0,
		consistency: 0,
		intervals
	};
	const sorted = [...intervals].sort((a, b) => a - b);
	const avg = sorted.reduce((a, b) => a + b, 0) / sorted.length;
	const variance = sorted.reduce((a, b) => a + (b - avg) ** 2, 0) / sorted.length;
	const jitter = Math.sqrt(variance);
	const p95 = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * .95))];
	return {
		hz: avg > 0 ? 1e3 / avg : 0,
		avgMs: avg,
		jitterMs: jitter,
		p95Ms: p95,
		consistency: Math.max(0, Math.min(100, 100 - jitter / avg * 100)),
		intervals: sorted
	};
}
function nearestRate(hz) {
	const rates = [
		125,
		250,
		500,
		1e3,
		2e3,
		4e3,
		8e3
	];
	return rates.reduce((best, r) => Math.abs(r - hz) < Math.abs(best - hz) ? r : best, rates[0]);
}
function DashPanel({ title, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-md bg-elevated/90 p-3 shadow-border", className),
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-2.5 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xs font-semibold tracking-wider text-muted uppercase",
				children: title
			}), action]
		}) : null, children]
	});
}
function SensSlider({ label, value, min, max, step, onChange, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sens-card min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-xs text-muted",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 font-display text-lg font-semibold tabular-nums leading-none text-fg",
					children: [fmtSens(value, step), onReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onReset,
						className: "text-faint hover:text-fg",
						"aria-label": "reset",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-3",
							strokeWidth: 2.5
						})
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				className: "sens-range mt-2.5",
				min,
				max,
				step,
				value: Number.isFinite(value) ? value : min,
				onChange: (e) => onChange(parseFloat(e.target.value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex justify-between font-mono text-xs tabular-nums text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmtSens(min, step) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmtSens(max, step) })]
			})
		]
	});
}
function HzChips({ rates, value, onChange, suffix = "Hz" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: rates.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"data-on": value === r,
			onClick: () => onChange(r),
			className: "hz-chip bg-elevated text-sm text-muted hover:text-fg data-[on=true]:text-accent-fg",
			children: [
				r,
				" ",
				suffix
			]
		}, r))
	});
}
function SwitchRow({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		onClick: () => onChange(!checked),
		className: "flex w-full items-center justify-between gap-3 rounded-md px-1 py-2 text-left text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative h-5 w-9 rounded-full transition-colors duration-[var(--motion-quick)]", checked ? "bg-accent" : "bg-subtle shadow-border"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 left-0.5 size-4 rounded-full bg-fg transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)]", checked ? "translate-x-4 bg-accent-fg" : "translate-x-0") })
		})]
	});
}
var EMPTY = {
	hz: 0,
	avgMs: 0,
	jitterMs: 0,
	last: 0,
	intervals: []
};
function useLiveInput() {
	const [stats, setStats] = (0, import_react.useState)(EMPTY);
	(0, import_react.useEffect)(() => {
		const times = [];
		let lastT = 0;
		const onMove = (e) => {
			if (e.pointerType === "touch") return;
			const now = performance.now();
			if (lastT) times.push(now - lastT);
			lastT = now;
			if (times.length > 160) times.shift();
		};
		const id = window.setInterval(() => {
			const iv = times.filter((d) => d > .12 && d < 48);
			const sum = summarizeIntervals(iv);
			setStats({
				hz: sum.hz,
				avgMs: sum.avgMs,
				jitterMs: sum.jitterMs,
				last: lastT,
				intervals: iv.slice(-48)
			});
		}, 140);
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			window.clearInterval(id);
			window.removeEventListener("pointermove", onMove);
		};
	}, []);
	return stats;
}
function agoLabel(last, lang) {
	if (!last) return "—";
	const ms = performance.now() - last;
	if (ms < 1e3) return lang === "tr" ? `${ms.toFixed(0)} ms önce` : `${ms.toFixed(0)} ms ago`;
	return lang === "tr" ? `${(ms / 1e3).toFixed(1)} sn önce` : `${(ms / 1e3).toFixed(1)}s ago`;
}
function LivePollCard({ lang, targetHz }) {
	const t = copy[lang];
	const live = useLiveInput();
	const fill = Math.max(2, Math.min(24, Math.round(live.hz / Math.max(targetHz, 125) * 24) || (live.hz > 0 ? 8 : 2)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
		title: t.rawInputPoll,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 font-display text-xs font-semibold tracking-wider text-success uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-success" }), t.live]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-3 gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: t.currentPoll
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "font-display text-xl font-semibold tabular-nums text-fg",
						children: [live.hz > 0 ? Math.round(live.hz) : "—", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-xs text-muted",
							children: "Hz"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: t.average
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "font-display text-xl font-semibold tabular-nums",
						children: [live.hz > 0 ? live.hz.toFixed(1) : "—", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-xs text-muted",
							children: "Hz"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: t.jitter
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "font-display text-xl font-semibold tabular-nums",
						children: [live.jitterMs ? live.jitterMs.toFixed(2) : "—", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-xs text-muted",
							children: "ms"
						})]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					t.lastInput,
					": ",
					agoLabel(live.last, lang)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex h-3 gap-px",
				children: Array.from({ length: 24 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i < fill ? "flex-1 rounded-sm bg-accent" : "flex-1 rounded-sm bg-subtle" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-faint",
				children: [
					t.rawActive,
					" · ",
					t.deviceSpecific,
					" · ",
					t.noSmoothing
				]
			})
		]
	});
}
function ProfilePreview({ lang }) {
	const t = copy[lang];
	const lab = useLab();
	const game = lab.activeGame;
	const setting = lab.setting(game);
	const entry = entryFor(game);
	const p = gameByName(game);
	const [edit, setEdit] = (0, import_react.useState)(false);
	const scope = lab.previewScope;
	const dpi = lab.dpi || 800;
	let sens = setting.general;
	let cm = gameCm(p, dpi, setting.general);
	if (scope !== "hip") {
		const sc = entry.scopes.find((s) => s.id === scope);
		if (sc) {
			const ads = setting.ads[sc.id] ?? sc.def;
			const mult = setting.multipliers[sc.id] ?? sc.mult;
			sens = p.mode === "pubg" || p.mode === "percent" ? ads : setting.general * mult;
			cm = gameCm(p, dpi, Number.isFinite(sens) ? sens : setting.general);
		}
	}
	const px = pixels360(cm, dpi);
	const tabs = [{
		id: "hip",
		label: t.hipfire
	}, ...entry.scopes.slice(0, 3).map((s) => ({
		id: s.id,
		label: /ads|zoom/i.test(s.label) ? s.label : `ADS ${s.label}`
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
		title: t.profilePreview,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setEdit((v) => !v),
			className: "text-xs font-medium text-accent hover:underline",
			children: t.editCrosshair
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex flex-wrap gap-1",
				children: tabs.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => lab.set("previewScope", tb.id),
					className: cn("h-7 rounded-sm px-2 text-xs font-medium", scope === tb.id ? "bg-fg text-bg" : "text-muted hover:bg-subtle hover:text-fg"),
					children: tb.label
				}, tb.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto size-40 rounded-md bg-bg shadow-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrosshairHair, { xh: lab.crosshair })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 space-y-1 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
						k: t.sensitivity,
						v: Number.isFinite(sens) ? sens.toFixed(sens < 10 ? 2 : 1) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
						k: "cm/360°",
						v: Number.isFinite(cm) ? cm.toFixed(1) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
						k: "pixels/360°",
						v: Number.isFinite(px) ? Math.round(px).toLocaleString() : "—"
					})
				]
			}),
			edit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [
					[
						"#2ad4ea",
						"#e7f3fb",
						"#3dd68c",
						"#ef4455"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => lab.set("crosshair", {
							...lab.crosshair,
							color: c
						}),
						className: "h-8 rounded-sm shadow-border",
						style: { background: c },
						"aria-label": c
					}, c)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "col-span-2 text-xs text-muted",
						children: [t.crosshairGap, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							className: "sens-range mt-1",
							min: 0,
							max: 16,
							value: lab.crosshair.gap,
							onChange: (e) => lab.set("crosshair", {
								...lab.crosshair,
								gap: Number(e.target.value)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "col-span-2 text-xs text-muted",
						children: [t.crosshairLength, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							className: "sens-range mt-1",
							min: 4,
							max: 22,
							value: lab.crosshair.length,
							onChange: (e) => lab.set("crosshair", {
								...lab.crosshair,
								length: Number(e.target.value)
							})
						})]
					})
				]
			}) : null
		]
	});
}
function Row$1({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums",
			children: v
		})]
	});
}
function CrosshairHair({ xh }) {
	const t = xh.thickness;
	const g = xh.gap;
	const l = xh.length;
	const arm = {
		background: xh.color,
		boxShadow: xh.outline ? "0 0 0 1px #041018" : void 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative size-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-1/2 left-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
				style: { background: xh.color }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-1/2 -translate-x-1/2",
				style: {
					...arm,
					width: t,
					height: l,
					top: `calc(50% - ${g + l}px)`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-1/2 -translate-x-1/2",
				style: {
					...arm,
					width: t,
					height: l,
					top: `calc(50% + ${g}px)`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-1/2 -translate-y-1/2",
				style: {
					...arm,
					height: t,
					width: l,
					left: `calc(50% - ${g + l}px)`
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-1/2 -translate-y-1/2",
				style: {
					...arm,
					height: t,
					width: l,
					left: `calc(50% + ${g}px)`
				}
			})
		]
	});
}
var SUBS = [
	{
		id: "general",
		key: "subGeneral"
	},
	{
		id: "ads",
		key: "subAds"
	},
	{
		id: "scopes",
		key: "subScopes"
	},
	{
		id: "vehicles",
		key: "subVehicles"
	},
	{
		id: "misc",
		key: "subMisc"
	},
	{
		id: "advanced",
		key: "subAdvanced"
	}
];
function GamesPanel() {
	const lang = useSetup((s) => s.lang);
	const t = copy[lang];
	const lab = useLab();
	const game = lab.activeGame;
	const entry = entryFor(game);
	const setting = lab.setting(game);
	const profile = gameByName(game);
	const dpi = lab.dpi || 800;
	const { featured, rest } = libraryGames();
	const q = lab.gameQuery.toLowerCase().trim();
	const shownFeatured = featured.filter((g) => {
		if (!q) return true;
		return `${entryFor(g.name).label} ${g.name} ${g.engine}`.toLowerCase().includes(q);
	});
	const shownRest = lab.libraryExpanded ? rest.filter((g) => {
		if (!q) return true;
		return `${g.name} ${g.engine}`.toLowerCase().includes(q);
	}) : [];
	const extra = lab.requestedGames.filter((n) => !q || n.toLowerCase().includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 gap-3 overflow-auto lg:grid-cols-[13.5rem_minmax(0,1fr)_17.5rem] lg:overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "dash-scroll flex min-h-0 flex-col overflow-auto rounded-md bg-elevated/70 p-2.5 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 font-display text-xs font-semibold tracking-wider text-muted uppercase",
						children: t.gameLibrary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: lab.gameQuery,
						onChange: (e) => lab.set("gameQuery", e.target.value),
						placeholder: t.searchGames,
						className: "mt-2 h-9 w-full rounded-md bg-subtle px-2.5 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex min-h-0 flex-1 flex-col gap-0.5",
						children: [
							shownFeatured.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameRow, {
								name: g.name,
								active: g.name === game,
								onClick: () => {
									lab.set("activeGame", g.name);
									lab.set("dstGame", g.name);
									lab.setSubTab("general");
								}
							}, g.name)),
							extra.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-7 items-center justify-center rounded-sm bg-subtle font-display text-xs font-bold text-accent shadow-border",
									children: "+"
								}), n]
							}, n)),
							shownRest.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameRow, {
								name: g.name,
								active: g.name === game,
								onClick: () => {
									lab.set("activeGame", g.name);
									lab.set("dstGame", g.name);
								}
							}, g.name))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => lab.set("libraryExpanded", !lab.libraryExpanded),
						className: "mt-1 rounded-md px-2 py-2 text-left text-xs text-muted hover:bg-subtle hover:text-fg",
						children: t.moreGames
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestGame, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-scroll min-h-0 overflow-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameBadge, {
								name: game,
								large: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-semibold tracking-wide uppercase",
									children: entry.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										profile.engine,
										" · ",
										profile.note
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("ml-auto flex items-center gap-1.5 rounded-sm px-2 py-1 text-xs font-semibold tracking-wide uppercase", setting.calibrated ? "bg-success/15 text-success" : "bg-subtle text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", setting.calibrated ? "bg-success" : "bg-faint") }), setting.calibrated ? t.calibrated : t.notCalibrated]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-1",
						children: SUBS.filter((s) => s.id !== "vehicles" || entry.hasVehicles).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => lab.setSubTab(s.id),
							className: cn("h-8 rounded-sm px-3 text-xs font-semibold tracking-wide uppercase", lab.subTab === s.id ? "bg-fg text-bg" : "text-muted hover:bg-subtle hover:text-fg"),
							children: t[s.key]
						}, s.id))
					}),
					lab.subTab === "general" || lab.subTab === "ads" || lab.subTab === "scopes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						lab.subTab === "general" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
									label: entry.hipLabel || t.generalSens,
									value: setting.general,
									min: entry.hip.min,
									max: entry.hip.max,
									step: entry.hip.step,
									onChange: (v) => lab.patchSetting(game, { general: v }),
									onReset: () => lab.patchSetting(game, { general: entry.hip.def })
								}),
								entry.hasVertical ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
									label: t.verticalSens,
									value: setting.vertical,
									min: .7,
									max: 1.3,
									step: .01,
									onChange: (v) => lab.patchSetting(game, { vertical: v }),
									onReset: () => lab.patchSetting(game, { vertical: 1 })
								}) : null,
								entry.hasAim ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
									label: t.aimSens,
									value: setting.aim,
									min: entry.hip.min,
									max: entry.hip.max,
									step: entry.hip.step,
									onChange: (v) => lab.patchSetting(game, { aim: v }),
									onReset: () => lab.patchSetting(game, { aim: entry.aimDef })
								}) : null,
								entry.hasScoped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
									label: t.scopedSens,
									value: setting.scoped,
									min: entry.hip.min,
									max: entry.hip.max,
									step: entry.hip.step,
									onChange: (v) => lab.patchSetting(game, { scoped: v }),
									onReset: () => lab.patchSetting(game, { scoped: entry.scopedDef })
								}) : null
							]
						}) : null,
						lab.subTab !== "scopes" && entry.scopes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-display text-xs font-semibold tracking-wider text-muted uppercase",
								children: t.adsIndividual
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7",
								children: entry.scopes.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
									label: `${sc.label} Scope`,
									value: setting.ads[sc.id] ?? sc.def,
									min: profile.mode === "yaw" && sc.def <= 3 ? .1 : entry.hip.min,
									max: profile.mode === "yaw" && sc.def <= 3 ? 3 : entry.hip.max,
									step: profile.mode === "yaw" && sc.def <= 3 ? .01 : entry.hip.step,
									onChange: (v) => lab.setAds(game, sc.id, v),
									onReset: () => lab.setAds(game, sc.id, sc.def)
								}, sc.id))
							})]
						}) : lab.subTab === "ads" && entry.scopes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: t.noAds
						}) : null,
						lab.subTab !== "ads" && entry.scopes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-display text-xs font-semibold tracking-wider text-muted uppercase",
								children: t.scopeRelative
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7",
								children: entry.scopes.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
									label: sc.label,
									value: setting.multipliers[sc.id] ?? sc.mult,
									min: .1,
									max: 3,
									step: .01,
									onChange: (v) => lab.setMult(game, sc.id, v),
									onReset: () => lab.setMult(game, sc.id, sc.mult)
								}, sc.id))
							})]
						}) : null
					] }) : null,
					lab.subTab === "vehicles" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 max-w-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensSlider, {
							label: t.vehiclesSens,
							value: setting.vehicles,
							min: entry.hip.min,
							max: entry.hip.max,
							step: entry.hip.step,
							onChange: (v) => lab.patchSetting(game, { vehicles: v })
						})
					}) : null,
					lab.subTab === "misc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 max-w-sm rounded-md bg-elevated/80 p-3 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
								label: t.miscRaw,
								checked: setting.rawInput,
								onChange: (v) => lab.patchSetting(game, { rawInput: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
								label: t.miscAccel,
								checked: setting.accel,
								onChange: (v) => lab.patchSetting(game, { accel: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
								label: t.miscSmooth,
								checked: setting.smoothing,
								onChange: (v) => lab.patchSetting(game, { smoothing: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
								label: t.miscInvert,
								checked: setting.invertY,
								onChange: (v) => lab.patchSetting(game, { invertY: v })
							})
						]
					}) : null,
					lab.subTab === "advanced" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid max-w-xl gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t.advFov,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
									value: setting.fov,
									onChange: (v) => lab.patchSetting(game, { fov: v }),
									step: "1",
									min: 60,
									max: 180
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t.advRes,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									value: lab.monitorRes,
									onChange: (v) => lab.set("monitorRes", v),
									children: RESOLUTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: r,
										children: r
									}, r))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "col-span-full text-xs leading-relaxed text-muted",
								children: profile.note
							})
						]
					}) : null,
					lab.subTab === "general" || lab.subTab === "ads" || lab.subTab === "scopes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => {
									lab.resetGame(game);
									toast(t.resetOk);
								},
								children: [
									t.resetDefault,
									" (",
									entry.short,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportExport, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "accent",
								size: "sm",
								onClick: () => applyGame(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), t.applyToGame]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_16rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalTable, { game }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FineCal, { game })]
					})] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "dash-scroll flex min-h-0 flex-col gap-3 overflow-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemCard, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivePollCard, {
						lang,
						targetHz: lab.mouseHz
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePreview, { lang })
				]
			})
		]
	});
	function applyGame() {
		const s = lab.setting(game);
		const e = entryFor(game);
		const lines = [
			`SensLab v1.3 — ${e.label}`,
			`DPI ${lab.dpi} · Mouse ${lab.mouseHz} Hz · Monitor ${lab.monitorHz} Hz · ${lab.monitorRes}`,
			`${e.hipLabel}: ${s.general}`,
			`Vertical: ${s.vertical}`,
			...e.scopes.map((sc) => `${sc.label}: ${s.ads[sc.id] ?? sc.def}  (×${(s.multipliers[sc.id] ?? sc.mult).toFixed(2)})`),
			`cm/360: ${gameCm(profile, dpi, s.general).toFixed(2)}`
		];
		navigator.clipboard.writeText(lines.join("\n")).catch(() => void 0);
		toast.success(t.applied);
	}
}
function GameBadge({ name, large }) {
	const e = entryFor(name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("flex items-center justify-center rounded-sm bg-bg font-display font-bold tracking-wide text-accent shadow-border", large ? "h-11 min-w-14 px-2 text-sm" : "size-7 text-xs"),
		children: e.short
	});
}
function GameRow({ name, active, onClick }) {
	const e = entryFor(name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm", active ? "bg-accent/15 text-fg shadow-border" : "text-muted hover:bg-subtle hover:text-fg"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameBadge, { name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 truncate",
			children: e.label
		})]
	});
}
function CalTable({ game }) {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const setting = lab.setting(game);
	const entry = entryFor(game);
	const p = gameByName(game);
	const dpi = lab.dpi || 800;
	const hipCm = gameCm(p, dpi, setting.general);
	const rows = [{
		id: "hip",
		label: t.hipfire,
		sens: setting.general,
		mult: 1,
		cm: hipCm
	}, ...entry.scopes.map((sc) => {
		const ads = setting.ads[sc.id] ?? sc.def;
		const mult = setting.multipliers[sc.id] ?? sc.mult;
		const independent = p.mode === "pubg" || p.mode === "percent";
		const use = independent ? ads : setting.general * mult;
		return {
			id: sc.id,
			label: sc.label,
			sens: independent ? ads : use,
			mult,
			cm: gameCm(p, dpi, use)
		};
	})];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashLike, {
		title: `${t.calTable} (${entry.short})`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[28rem] text-left text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: t.colScope
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: t.colDist
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: t.colPx
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: t.colSens
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: t.colMult
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: t.colCal
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-1.5",
							children: r.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-1.5 tabular-nums",
							children: Number.isFinite(r.cm) ? r.cm.toFixed(1) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-1.5 tabular-nums",
							children: Number.isFinite(r.cm) ? Math.round(pixels360(r.cm, dpi)).toLocaleString() : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-1.5 tabular-nums",
							children: Number.isFinite(r.sens) ? r.sens.toFixed(r.sens < 10 ? 2 : 1) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-1.5 tabular-nums",
							children: r.mult.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-1.5",
							children: setting.calibrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: "—"
							})
						})
					]
				}, r.id)) })]
			})
		})
	});
}
function FineCal({ game }) {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const [cm, setCm] = useStateLocal(lab.measuredCm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashLike, {
		title: t.fineCal,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted",
				children: t.fineCalLead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1 block text-xs text-muted",
					children: t.measured360
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: cm,
					onChange: (e) => setCm(e.target.value),
					className: "h-10 w-full rounded-md bg-subtle px-3 font-display text-xl font-semibold tabular-nums shadow-border outline-none focus:ring-2 focus:ring-accent/40"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1 block text-xs text-muted",
					children: t.calMethod
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: lab.calMethod,
					onChange: (e) => lab.set("calMethod", e.target.value),
					className: "h-10 w-full rounded-md bg-subtle px-3 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "pad",
							children: t.methodPad
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "ingame",
							children: t.methodIngame
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "counts",
							children: t.methodCounts
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "accent",
				className: "mt-3 w-full",
				onClick: () => {
					const n = parseFloat(cm);
					if (!(n > 0)) return;
					lab.calibrateGame(game, n);
					toast.success(t.calibrated);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), t.calNow]
			})
		]
	});
}
function useStateLocal(initial) {
	const [v, setV] = (0, import_react.useState)(initial);
	return [v, setV];
}
function DashLike({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-md bg-elevated/90 p-3 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-2 font-display text-xs font-semibold tracking-wider text-muted uppercase",
			children: title
		}), children]
	});
}
function SystemCard() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const mon = monitorById(lab.monitorId);
	async function refresh() {
		const d = readDisplay();
		lab.set("monitorRes", `${d.width}×${d.height}`);
		const hz = await measureRefreshRate();
		if (hz) lab.set("monitorHz", hz);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-md bg-elevated/90 p-3 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-2.5 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xs font-semibold tracking-wider text-muted uppercase",
				children: t.sysInfo
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void refresh(),
				className: "text-xs text-accent hover:underline",
				children: t.refreshBtn
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "space-y-2.5 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
						className: "mt-0.5 size-8 text-accent",
						strokeWidth: 1.4
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									mon.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [
											"(",
											mon.conn,
											")"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									lab.monitorRes,
									" @ ",
									lab.monitorHz,
									" Hz"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 inline-flex rounded-sm bg-success/15 px-1.5 py-0.5 text-xs font-semibold text-success",
								children: lab.monitorNative ? t.native : t.scaled
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mouse, {
						className: "mt-0.5 size-8 text-accent",
						strokeWidth: 1.4
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: lab.detectedName || lab.mouse
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								lab.dpi,
								" ",
								t.dpiUnit,
								" · ",
								lab.mouseHz,
								" Hz · ",
								t.hidConn
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 flex size-8 items-center justify-center rounded-sm bg-subtle font-display text-xs font-bold text-accent shadow-border",
						children: "OS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: t.osName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t.osBuild
					})] })]
				})
			]
		})]
	});
}
function ImportExport() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const fileRef = (0, import_react.useRef)(null);
	function exportJson() {
		const blob = new Blob([JSON.stringify({
			senslab: "1.3",
			game: lab.activeGame,
			dpi: lab.dpi,
			mouseHz: lab.mouseHz,
			monitorHz: lab.monitorHz,
			setting: lab.setting(lab.activeGame)
		}, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = `senslab-${entryFor(lab.activeGame).short}.json`;
		a.click();
		URL.revokeObjectURL(a.href);
		toast(t.exported);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			onClick: () => fileRef.current?.click(),
			children: t.importBtn
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			onClick: exportJson,
			children: t.exportBtn
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: fileRef,
			type: "file",
			accept: "application/json",
			className: "hidden",
			onChange: async (e) => {
				const f = e.target.files?.[0];
				e.target.value = "";
				if (!f) return;
				try {
					const data = JSON.parse(await f.text());
					if (data.game && data.setting) {
						lab.importSetting(data.game, {
							...cloneSetting(data.game),
							...data.setting
						});
						toast.success(t.imported);
					}
				} catch {}
			}
		})
	] });
}
function RequestGame() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 border-t border-border pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-muted hover:bg-subtle hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), t.requestGame]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			className: "mt-1 px-1",
			onSubmit: (e) => {
				e.preventDefault();
				const n = name.trim();
				if (!n) return;
				if (!GAMES.some((g) => g.name === n) && !lab.requestedGames.includes(n)) lab.set("requestedGames", [...lab.requestedGames, n]);
				setName("");
				setOpen(false);
				toast(t.requestSent);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: name,
				onChange: (e) => setName(e.target.value),
				placeholder: t.requestPlaceholder,
				className: "h-9 w-full rounded-md bg-subtle px-2 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
			})
		}) : null]
	});
}
function MonitorPanel() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const mon = monitorById(lab.monitorId);
	const [measured, setMeasured] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function detect() {
		setBusy(true);
		try {
			const d = readDisplay();
			lab.set("monitorRes", `${d.width}×${d.height}`);
			lab.set("monitorId", "detected");
			const hz = await measureRefreshRate();
			setMeasured(hz);
			if (hz) lab.set("monitorHz", hz);
			toast.success(`${t.detectedHz}: ${hz} Hz`);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tracking-wide",
					children: t.monitorTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-prose text-sm leading-relaxed text-muted",
					children: t.monitorLead
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
					title: t.refreshRate,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 font-display text-4xl font-semibold tabular-nums text-accent",
							children: [lab.monitorHz, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-lg text-muted",
								children: "Hz"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HzChips, {
							rates: REFRESH_RATES,
							value: lab.monitorHz,
							onChange: (v) => lab.set("monitorHz", v)
						}),
						measured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [
								t.detectedHz,
								": ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-fg",
									children: [measured, " Hz"]
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "accent",
							onClick: () => void detect(),
							disabled: busy,
							children: busy ? t.detecting : t.detectDisplay
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t.resolution,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: lab.monitorRes,
							onChange: (v) => lab.set("monitorRes", v),
							children: RESOLUTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: r,
								children: r
							}, r))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t.connection,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 items-center rounded-xl bg-elevated px-3 text-sm shadow-border",
							children: mon.conn
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
						label: t.native,
						checked: lab.monitorNative,
						onChange: (v) => lab.set("monitorNative", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
						label: t.dyac,
						checked: true,
						onChange: () => void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchRow, {
						label: t.blurReduction,
						checked: true,
						onChange: () => void 0
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashPanel, {
			title: t.selectMonitor,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dash-scroll max-h-[28rem] space-y-1 overflow-auto",
				children: MONITORS_CATALOG.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						lab.set("monitorId", m.id);
						if (!m.hz.includes(lab.monitorHz)) lab.set("monitorHz", m.hz[m.hz.length - 1]);
						if (!m.res.includes(lab.monitorRes)) lab.set("monitorRes", m.native);
					},
					className: cn("flex w-full items-center gap-3 rounded-md px-2 py-2 text-left", m.id === lab.monitorId ? "bg-accent/15 shadow-border" : "hover:bg-subtle"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
						className: "size-8 shrink-0 text-accent",
						strokeWidth: 1.4
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block truncate text-sm font-medium",
							children: [
								m.brand,
								" ",
								m.name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [
								m.native,
								" · ",
								m.hz.join("/"),
								" Hz"
							]
						})]
					})]
				}, m.id))
			})
		})]
	});
}
function MousePanel() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const live = useLiveInput();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const profile = MICE.find((m) => m.name === lab.mouse) ?? MICE[0];
	const near = live.hz > 0 ? nearestRate(live.hz) : 0;
	const displayName = lab.detectedName || t.anyMouse;
	async function detect() {
		setBusy(true);
		try {
			const hid = await requestHidMouse();
			if (hid) {
				lab.setDetected(hid.name, hid.vidpid);
				if (hid.profile) lab.set("mouse", hid.profile);
				else {
					const m = matchMouseProfile(hid.name);
					if (m) lab.set("mouse", m.name);
				}
			} else lab.setDetected(lab.detectedName || "HID Pointer", lab.detectedVidPid || "pointer events");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tracking-wide",
					children: t.mouseTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-prose text-sm leading-relaxed text-muted",
					children: t.mouseLead
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
					title: t.pollRate,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 font-display text-4xl font-semibold tabular-nums text-accent",
							children: [lab.mouseHz, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-lg text-muted",
								children: "Hz"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HzChips, {
							rates: POLL_RATES,
							value: lab.mouseHz,
							onChange: (v) => lab.set("mouseHz", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
									k: t.liveHz,
									v: live.hz > 0 ? `${Math.round(live.hz)}` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
									k: t.nearestClass,
									v: near ? `${near}` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
									k: t.profileMax,
									v: profile.max ? `${profile.max}` : "ANY"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t.dpi,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							value: lab.dpi,
							onChange: (v) => {
								lab.set("dpi", v);
								lab.set("srcDpi", v);
								lab.set("dstDpi", v);
							},
							step: "50",
							min: 50
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Mouse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: lab.mouse,
							onChange: (v) => lab.set("mouse", v),
							children: MICE.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: m.name,
								children: [m.name, m.max ? ` · ${m.max} Hz` : ""]
							}, m.name))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
					title: t.liveHid,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold",
							children: displayName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-xs text-muted",
							children: lab.detectedVidPid || "VID/PID — HID veya hareket bekleniyor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "accent",
							onClick: () => void detect(),
							disabled: busy,
							children: busy ? t.detecting : t.detectMouse
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted",
							children: t.hidHint
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashPanel, {
			title: t.selectMouse,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dash-scroll max-h-[32rem] overflow-auto",
				children: MICE.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => lab.set("mouse", m.name),
					className: cn("flex w-full items-center justify-between gap-3 rounded-md px-2 py-2 text-left text-sm", m.name === lab.mouse ? "bg-accent/15 shadow-border" : "hover:bg-subtle"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: m.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: m.source
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-muted",
						children: m.max ? `${m.max} Hz` : "ANY"
					})]
				}, m.name))
			})
		})]
	});
}
function Stat$1({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-muted",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "font-display text-2xl font-semibold tabular-nums",
		children: [v, v !== "—" && v !== "ANY" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-1 text-xs text-muted",
			children: "Hz"
		}) : null]
	})] });
}
var DURATION_MS = 8e3;
function PollPanel() {
	const lang = useSetup((s) => s.lang);
	const t = copy[lang];
	const mouseHz = useLab((s) => s.mouseHz);
	const set = useLab((s) => s.set);
	const [sample, setSample] = (0, import_react.useState)({
		hz: 0,
		avgMs: 0,
		jitterMs: 0,
		p95Ms: 0,
		consistency: 0,
		intervals: [],
		state: "idle"
	});
	const times = (0, import_react.useRef)([]);
	const running = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			if (!running.current) return;
			if (e.pointerType === "touch") return;
			const now = performance.now();
			const last = times.current[times.current.length - 1];
			times.current.push(now);
			if (last) {
				const dt = now - last;
				if (dt > .2 && dt < 40) {
					const iv = times.current.slice(1).map((x, i) => x - times.current[i]).filter((d) => d > .2 && d < 40);
					setSample({
						...summarizeIntervals(iv),
						state: "running"
					});
				}
			}
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, []);
	function start() {
		times.current = [];
		running.current = true;
		setSample({
			hz: 0,
			avgMs: 0,
			jitterMs: 0,
			p95Ms: 0,
			consistency: 0,
			intervals: [],
			state: "running"
		});
		window.setTimeout(() => {
			running.current = false;
			const iv = times.current.slice(1).map((x, i) => x - times.current[i]).filter((d) => d > .2 && d < 40);
			const sum = summarizeIntervals(iv);
			setSample({
				...sum,
				state: iv.length < 8 ? "none" : "done"
			});
		}, DURATION_MS);
	}
	const label = sample.state === "running" ? t.pollMove : sample.state === "done" ? t.pollDone : sample.state === "none" ? t.pollNone : t.pollIdle;
	const near = sample.hz > 0 ? nearestRate(sample.hz) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs font-semibold tracking-wider text-muted uppercase",
							children: t.tabPoll
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display font-semibold tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl tabular-nums text-accent",
								children: sample.hz > 0 ? Math.round(sample.hz) : "—"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-lg text-muted",
								children: "Hz"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: label
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "accent",
						onClick: start,
						disabled: sample.state === "running",
						children: sample.state === "running" ? t.pollMove : t.pollStart
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashPanel, {
					title: t.targetHz,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HzChips, {
						rates: POLL_RATES,
						value: mouseHz,
						onChange: (v) => set("mouseHz", v)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PollBars, { intervals: sample.intervals }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t.hidHint
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivePollCard, {
				lang,
				targetHz: mouseHz
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t.interval,
						v: sample.avgMs ? `${sample.avgMs.toFixed(3)} ms` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t.jitter,
						v: sample.jitterMs ? `${sample.jitterMs.toFixed(3)} ms` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "P95",
						v: sample.p95Ms ? `${sample.p95Ms.toFixed(3)} ms` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t.stability,
						v: sample.consistency ? `${sample.consistency.toFixed(1)}%` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t.nearestClass,
						v: near ? `${near} Hz` : "—"
					})
				]
			}) })]
		})]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums",
			children: v
		})]
	});
}
function PollBars({ intervals }) {
	const vis = intervals.slice(-80);
	const max = Math.max(4, ...vis);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-36 items-end gap-px overflow-hidden rounded-md bg-elevated px-2 pt-2 shadow-border",
		children: vis.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full w-full items-center justify-center text-sm text-faint",
			children: "—"
		}) : vis.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-px flex-1 rounded-t-sm bg-accent",
			style: { height: `${Math.max(8, v / max * 100)}%` }
		}, i))
	});
}
function CalibrationPanel() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const game = lab.activeGame;
	const p = gameByName(game);
	const e = entryFor(game);
	const setting = lab.setting(game);
	const dpi = lab.dpi || 800;
	const current = gameCm(p, dpi, setting.general);
	const [cm, setCm] = (0, import_react.useState)(lab.measuredCm || "86.7");
	const measured = parseFloat(cm);
	const target = Number.isFinite(measured) && measured > 0 ? sensForCm(p, dpi, measured) : NaN;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold tracking-wide",
					children: t.calTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-prose text-sm leading-relaxed text-muted",
					children: t.calLead
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.game,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						value: game,
						onChange: (v) => {
							lab.set("activeGame", v);
							lab.set("dstGame", v);
						},
						children: GAMES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: g.name,
							children: entryFor(g.name).label
						}, g.name))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
					title: t.measured360,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: cm,
							onChange: (e) => setCm(e.target.value),
							className: "h-14 w-full rounded-md bg-subtle px-3 font-display text-4xl font-semibold tabular-nums shadow-border outline-none focus:ring-2 focus:ring-accent/40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: t.fineCalLead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-3 gap-2",
							children: [
								"pad",
								"ingame",
								"counts"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => lab.set("calMethod", m),
								className: lab.calMethod === m ? "h-10 rounded-md bg-accent text-sm font-semibold text-accent-fg" : "h-10 rounded-md bg-elevated text-sm text-muted shadow-border hover:text-fg",
								children: m === "pad" ? t.methodPad : m === "ingame" ? t.methodIngame : t.methodCounts
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "accent",
							className: "mt-4 w-full",
							disabled: !(measured > 0),
							onClick: () => {
								lab.calibrateGame(game, measured);
								toast.success(`${e.label}: ${t.calibrated}`);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), t.calNow]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
				title: e.label,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t.currentCm,
							v: Number.isFinite(current) ? `${current.toFixed(2)} cm` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t.targetSens,
							v: Number.isFinite(target) ? target.toFixed(target < 10 ? 3 : 1) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t.dpi,
							v: String(dpi)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t.pollRate,
							v: `${lab.mouseHz} Hz`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t.refreshRate,
							v: `${lab.monitorHz} Hz`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "px/360",
							v: Number.isFinite(current) ? Math.round(pixels360(current, dpi)).toLocaleString() : "—"
						})
					]
				}), p.mode === "manual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: t.profileGuard
				}) : null]
			})
		})]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums",
			children: v
		})]
	});
}
function ProfilesPanel() {
	const t = copy[useSetup((s) => s.lang)];
	const lab = useLab();
	const [name, setName] = (0, import_react.useState)("");
	const e = entryFor(lab.activeGame);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[20rem_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
			title: t.saveProfile,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: t.profilesLead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t.profileName,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: `${e.label} ${lab.dpi}DPI`,
						className: "h-11 w-full rounded-xl bg-elevated px-3 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-1 text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: e.label }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							lab.dpi,
							" DPI · ",
							lab.mouseHz,
							" Hz · ",
							lab.monitorHz,
							" Hz"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: lab.mouse })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "accent",
					className: "mt-4 w-full",
					onClick: () => {
						lab.saveProfile(name);
						setName("");
						toast.success(t.profileSaved);
					},
					children: t.saveProfile
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashPanel, {
			title: t.profilesTitle,
			children: lab.profiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t.noProfiles
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: lab.profiles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center gap-2 rounded-md bg-subtle/60 px-3 py-2 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									entryFor(p.game).label,
									" · ",
									p.dpi,
									" DPI · ",
									p.mouseHz,
									" Hz · ",
									p.monitorHz,
									" Hz"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => lab.loadProfile(p.id),
							children: t.load
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "dangerGhost",
							onClick: () => lab.deleteProfile(p.id),
							children: t.delete
						})
					]
				}, p.id))
			})
		})]
	});
}
function ConfidencePanel() {
	const t = copy[useSetup((s) => s.lang)];
	const query = useLab((s) => s.gameQuery);
	const active = useLab((s) => s.activeGame);
	const set = useLab((s) => s.set);
	const q = query.toLowerCase().trim();
	const rows = GAMES.filter((g) => !q || `${g.name} ${g.engine} ${g.quality}`.toLowerCase().includes(q));
	const current = GAMES.find((g) => g.name === active) ?? GAMES[0];
	const score = confidenceScore(current.quality);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold tracking-wide",
				children: t.confTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-prose text-sm leading-relaxed text-muted",
				children: t.confLead
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DashPanel, {
				title: entryFor(current.name).label,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.score
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-5xl font-semibold tabular-nums text-accent",
								children: score
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.quality
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityMark, { q: current.quality })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.yawConst
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm tabular-nums",
								children: current.yaw ?? "—"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 overflow-hidden rounded-full bg-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent",
							style: { width: `${score}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: current.note
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dash-scroll max-h-[28rem] overflow-auto rounded-md shadow-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-elevated text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: t.game
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: t.quality
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: t.yawConst
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: t.score
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: cn("cursor-pointer border-t border-border/70 hover:bg-subtle", g.name === active ? "bg-accent/10" : ""),
						onClick: () => set("activeGame", g.name),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: entryFor(g.name).label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityMark, { q: g.quality })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs tabular-nums",
								children: g.yaw ?? "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 tabular-nums",
								children: confidenceScore(g.quality)
							})
						]
					}, g.name)) })]
				})
			})
		]
	});
}
var TABS = [
	{
		id: "convert",
		key: "tabConvert"
	},
	{
		id: "games",
		key: "tabGames"
	},
	{
		id: "monitor",
		key: "tabMonitor"
	},
	{
		id: "mouse",
		key: "tabMouse"
	},
	{
		id: "poll",
		key: "tabPoll"
	},
	{
		id: "calibrate",
		key: "tabCalibrate"
	},
	{
		id: "profiles",
		key: "tabProfiles"
	},
	{
		id: "confidence",
		key: "tabConfidence"
	}
];
function SensLabApp() {
	const lang = useSetup((s) => s.lang);
	const t = copy[lang];
	const z = useSetup((s) => s.zApp);
	const closeApp = useSetup((s) => s.closeApp);
	const minApp = useSetup((s) => s.minApp);
	const focusApp = useSetup((s) => s.focusApp);
	const tab = useLab((s) => s.tab);
	const setTab = useLab((s) => s.setTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppWindow, {
		title: t.appTitle,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-5 rounded-sm" }),
		lang,
		zIndex: z,
		onClose: closeApp,
		onMinimize: minApp,
		onFocus: focusApp,
		className: "window-app studio-size",
		bodyClassName: "flex min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative shrink-0 overflow-hidden border-b border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "header-ops absolute inset-y-0 right-0 hidden w-[48%] md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] bg-gradient-to-r from-surface via-surface/55 to-transparent md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-wrap items-center gap-3 px-4 py-4 sm:px-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl font-semibold leading-none tracking-wide",
										children: t.wordmark
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-xs font-semibold tracking-wide text-accent",
										children: t.intel
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 hidden text-xs text-muted lg:block",
										children: t.intelSub
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto hidden text-right sm:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm font-semibold tracking-[0.2em] text-fg",
										children: t.edition
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: t.v13
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs tracking-wider text-faint",
										children: t.precision
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "relative flex gap-1 overflow-x-auto px-3 pb-3 sm:px-4",
						children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab(tb.id),
							className: cn("h-8 shrink-0 rounded-sm px-3 text-xs font-semibold tracking-wide uppercase", tab === tb.id ? "bg-fg text-bg" : "text-muted shadow-border hover:bg-subtle hover:text-fg"),
							children: t[tb.key]
						}, tb.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: tab === "games" ? "flex min-h-0 flex-1 flex-col overflow-hidden p-3 sm:p-4" : "dash-scroll min-h-0 flex-1 overflow-auto p-3 sm:p-4",
				children: [
					tab === "convert" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConvertPanel, {}) : null,
					tab === "games" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamesPanel, {}) : null,
					tab === "monitor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorPanel, {}) : null,
					tab === "mouse" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePanel, {}) : null,
					tab === "poll" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PollPanel, {}) : null,
					tab === "calibrate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalibrationPanel, {}) : null,
					tab === "profiles" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilesPanel, {}) : null,
					tab === "confidence" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidencePanel, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex shrink-0 items-center justify-between border-t border-border px-4 py-1.5 text-xs text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-wider",
					children: t.footerLeft
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-wider",
					children: t.precision
				})]
			})
		]
	});
}
function Desktop() {
	const lang = useSetup((s) => s.lang);
	const t = copy[lang];
	const installed = useSetup((s) => s.installed);
	const desktopShortcut = useSetup((s) => s.desktopShortcut);
	const uninstallShortcut = useSetup((s) => s.uninstallShortcut);
	const setupOpen = useSetup((s) => s.setupOpen);
	const setupMin = useSetup((s) => s.setupMin);
	const appOpen = useSetup((s) => s.appOpen);
	const appMin = useSetup((s) => s.appMin);
	const openSetup = useSetup((s) => s.openSetup);
	const openApp = useSetup((s) => s.openApp);
	const focusSetup = useSetup((s) => s.focusSetup);
	const focusApp = useSetup((s) => s.focusApp);
	const minSetup = useSetup((s) => s.minSetup);
	const minApp = useSetup((s) => s.minApp);
	const closeApp = useSetup((s) => s.closeApp);
	const setLang = useSetup((s) => s.setLang);
	const [tray, setTray] = (0, import_react.useState)(false);
	const [settings, setSettings] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang === "tr" ? "tr" : "en";
	}, [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "desktop-bg relative h-dvh overflow-hidden text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "desktop-grid pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RbkWatermark, { size: "hero" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute right-6 bottom-16 z-10 hidden text-right sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rbk-script text-4xl text-fg/25 italic",
					children: t.rbkMark
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs tracking-[0.28em] text-faint",
					children: t.rbkScript
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-5 left-3 z-10 flex flex-col gap-2 sm:top-6 sm:left-4 sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopIcon, {
						label: t.recycle,
						onClick: () => void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							className: "size-6 text-muted",
							strokeWidth: 1.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopIcon, {
						label: t.setupIcon,
						onClick: () => openSetup(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-10" })
					}),
					installed && desktopShortcut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopIcon, {
						label: t.appIcon,
						onClick: openApp,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-10" })
					}) : null,
					installed && uninstallShortcut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopIcon, {
						label: t.uninstallIcon,
						onClick: () => openSetup("uninstall"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UninstallMark, {})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "window-layer",
				children: [setupOpen && !setupMin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupWindow, {}) : null, appOpen && !appMin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensLabApp, {}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "absolute inset-x-0 bottom-0 z-30 flex h-12 items-center gap-1.5 border-t border-border bg-surface/90 px-2 backdrop-blur-md sm:px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => installed ? openApp() : openSetup(),
						className: "flex size-10 items-center justify-center rounded-md hover:bg-elevated",
						"aria-label": t.appName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden h-9 min-w-40 items-center gap-2 rounded-md bg-elevated px-3 text-sm text-faint shadow-border sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), t.taskbarSearch]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-1 flex items-center gap-1",
						children: [setupOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskBtn, {
							active: !setupMin,
							label: t.setupTitle,
							onClick: () => setupMin ? focusSetup() : minSetup(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-5" })
						}) : null, appOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskBtn, {
							active: !appMin,
							label: t.appTitle,
							onClick: () => appMin ? focusApp() : minApp(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-5" })
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative ml-auto flex items-center gap-2 pr-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tracking-brand hidden text-xs font-medium text-faint sm:inline",
								children: t.rbkMark
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setTray((v) => !v);
									setSettings(false);
								},
								className: "flex size-9 items-center justify-center rounded-md hover:bg-elevated",
								"aria-label": t.appName,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { lang }),
							tray ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-0 bottom-12 w-56 overflow-hidden rounded-md bg-surface shadow-window",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "border-b border-border px-3 py-2 font-display text-xs font-semibold tracking-wider text-muted",
										children: [
											"SensLab ",
											t.v13,
											" · ",
											t.edition
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrayItem, {
										onClick: () => {
											setTray(false);
											installed ? openApp() : openSetup();
										},
										children: t.trayOpen
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrayItem, {
										onClick: () => {
											toast(t.upToDate);
											setTray(false);
										},
										children: t.trayUpdate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrayItem, {
										onClick: () => {
											setSettings(true);
											setTray(false);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), t.traySettings]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrayItem, {
										onClick: () => {
											setTray(false);
											closeApp();
										},
										children: t.trayExit
									})
								]
							}) : null,
							settings ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-0 bottom-12 w-56 rounded-md bg-surface p-3 shadow-window",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-2 text-xs font-semibold tracking-wider text-muted uppercase",
										children: t.settingsLang
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setLang("tr"),
											className: cn("h-8 flex-1 rounded-md text-xs font-semibold", lang === "tr" ? "bg-accent text-accent-fg" : "bg-elevated text-muted"),
											children: "TR"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setLang("en"),
											className: cn("h-8 flex-1 rounded-md text-xs font-semibold", lang === "en" ? "bg-accent text-accent-fg" : "bg-elevated text-muted"),
											children: "EN"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSettings(false),
										className: "mt-2 w-full text-xs text-muted hover:text-fg",
										children: t.close
									})
								]
							}) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				offset: 72
			})
		]
	});
}
function TrayItem({ onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-subtle",
		children
	});
}
function DesktopIcon({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "group flex w-20 flex-col items-center gap-1.5 rounded-md p-1.5 hover:bg-fg/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-11 items-center justify-center",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "line-clamp-2 text-center text-xs leading-tight text-fg/90",
			children: label
		})]
	});
}
function TaskBtn({ active, label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		title: label,
		onClick,
		className: cn("relative flex h-9 min-w-11 items-center justify-center rounded-md px-2", active ? "bg-elevated" : "hover:bg-elevated/70"),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full", active ? "bg-accent" : "bg-faint") })]
	});
}
function UninstallMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensMark, { className: "size-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-danger text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				className: "size-2.5",
				strokeWidth: 3
			})
		})]
	});
}
function Clock({ lang }) {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setNow(/* @__PURE__ */ new Date());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	const locale = lang === "tr" ? "tr-TR" : "en-US";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-8 w-16 pr-1 text-right text-xs leading-tight",
		children: now ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tabular-nums",
			children: now.toLocaleTimeString(locale, {
				hour: "2-digit",
				minute: "2-digit"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted",
			children: now.toLocaleDateString(locale, {
				day: "numeric",
				month: "short"
			})
		})] }) : null
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desktop, {});
}
//#endregion
export { Home as component };
