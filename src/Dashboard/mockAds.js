export const MOCK_ADVERTISEMENTS = [
  {
    id: 'ad101',
    title: 'شقة فاخرة للبيع بإطلالة بحرية',
    type: 'apartment', // "apartment" | "villa" | "commercial"
    price: 3500000, // EGP
    area: 180, // square meters
    date_of_building: '2020-03-15',
    images: [
      'https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Apartment+1-1',
      'https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Apartment+1-2',
      'https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Apartment+1-3',
    ],
    location: {
      lat: 31.2001,
      lng: 29.9187,
    },
    address: 'شارع فؤاد، سموحة، الدور الخامس',
    city: 'الإسكندرية',
    governorate: 'الإسكندرية',
    phone: '01012345678',
    user_name: 'أحمد علي',
    userId: 'user123',
    ad_type: 'بيع',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad102',
    title: 'فيلا مستقلة فاخرة في كمبوند هادئ',
    type: 'villa',
    price: 9800000,
    area: 450,
    date_of_building: '2018-09-01',
    images: [
      'https://via.placeholder.com/600x400/98FB98/FFFFFF?text=Villa+1-1',
      'https://via.placeholder.com/600x400/98FB98/FFFFFF?text=Villa+1-2',
      'https://via.placeholder.com/600x400/98FB98/FFFFFF?text=Villa+1-3',
    ],
    location: {
      lat: 30.0444,
      lng: 31.2357,
    },
    address: 'كمبوند النخيل، طريق مصر إسماعيلية الصحراوي',
    city: 'القاهرة الجديدة',
    governorate: 'القاهرة',
    phone: '01123456789',
    user_name: 'فاطمة محمد',
    userId: 'user124',
    ad_type: 'بيع',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad103',
    title: 'مكتب إداري مجهز بالكامل للبيع',
    type: 'commercial',
    price: 1200000,
    area: 90,
    date_of_building: '2022-01-20',
    images: [
      'https://via.placeholder.com/600x400/FFD700/000000?text=Office+1-1',
      'https://via.placeholder.com/600x400/FFD700/000000?text=Office+1-2',
    ],
    location: {
      lat: 30.0595,
      lng: 31.2234,
    },
    address: 'أبراج النيل، ميدان التحرير',
    city: 'القاهرة',
    governorate: 'القاهرة',
    phone: '01234567890',
    user_name: 'محمد محمود',
    userId: 'user125',
    ad_type: 'بيع',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad104',
    title: 'شقة للإيجار مفروشة بالكامل',
    type: 'apartment',
    price: 15000, // EGP per month
    area: 120,
    date_of_building: '2015-05-10',
    images: [
      'https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Rent+Apt+1-1',
      'https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Rent+Apt+1-2',
    ],
    location: {
      lat: 31.0409,
      lng: 31.3789,
    },
    address: 'شارع الجامعة، المنصورة',
    city: 'المنصورة',
    governorate: 'الدقهلية',
    phone: '01501234567',
    user_name: 'سارة خالد',
    userId: 'user126',
    ad_type: 'إيجار', // Changed to 'إيجار' for an example
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad105',
    title: 'محل تجاري للإيجار بمنطقة حيوية',
    type: 'commercial',
    price: 25000,
    area: 70,
    date_of_building: '2019-11-01',
    images: [
      'https://via.placeholder.com/600x400/FFB6C1/000000?text=Shop+1-1',
      'https://via.placeholder.com/600x400/FFB6C1/000000?text=Shop+1-2',
    ],
    location: {
      lat: 30.0626,
      lng: 31.2497,
    },
    address: 'شارع التسعين الشمالي، التجمع الخامس',
    city: 'القاهرة الجديدة',
    governorate: 'القاهرة',
    phone: '01098765432',
    user_name: 'خالد السيد',
    userId: 'user127',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad106',
    title: 'شقة صغيرة بقلب المدينة للبيع',
    type: 'apartment',
    price: 850000,
    area: 75,
    date_of_building: '2005-08-01',
    images: [
      'https://via.placeholder.com/600x400/B0C4DE/FFFFFF?text=Small+Apt+1-1',
      'https://via.placeholder.com/600x400/B0C4DE/FFFFFF?text=Small+Apt+1-2',
    ],
    location: {
      lat: 31.2001,
      lng: 29.9187,
    },
    address: 'شارع النبي دانيال، محطة الرمل',
    city: 'الإسكندرية',
    governorate: 'الإسكندرية',
    phone: '01211223344',
    user_name: 'ليلى فؤاد',
    userId: 'user128',
    ad_type: 'بيع',
    ad_status: 'تم البيع', // Example of a different status
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  {
    id: 'ad107',
    title: 'فيلا للإيجار اليومي على بحيرة قارون',
    type: 'villa',
    price: 3000, // EGP per day
    area: 250,
    date_of_building: '2010-06-12',
    images: [
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
      'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
    ],
    location: {
      lat: 29.4754,
      lng: 30.8242,
    },
    address: 'الساحل الشمالي لبحيرة قارون',
    city: 'الفيوم',
    governorate: 'الفيوم',
    phone: '01009988776',
    user_name: 'يوسف جمال',
    userId: 'user129',
    ad_type: 'إيجار',
    ad_status: 'تحت العرض',
  },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
  // {
  //   id: 'ad107',
  //   title: 'فيلا للإيجار اليومي على بحيرة قارون',
  //   type: 'villa',
  //   price: 3000, // EGP per day
  //   area: 250,
  //   date_of_building: '2010-06-12',
  //   images: [
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-1',
  //     'https://via.placeholder.com/600x400/8B008B/FFFFFF?text=Lake+Villa+1-2',
  //   ],
  //   location: {
  //     lat: 29.4754,
  //     lng: 30.8242,
  //   },
  //   address: 'الساحل الشمالي لبحيرة قارون',
  //   city: 'الفيوم',
  //   governorate: 'الفيوم',
  //   phone: '01009988776',
  //   user_name: 'يوسف جمال',
  //   userId: 'user129',
  //   ad_type: 'إيجار',
  //   ad_status: 'تحت العرض',
  // },
];