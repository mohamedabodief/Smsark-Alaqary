class FinancingAdvertisementData {
  constructor({
    title,
    description,
    financing_model,
    image,
    phone,
    start_limit,
    end_limit,
    org_name,
    type_of_user,
    userId,
    interest_rate_upto_5,
    interest_rate_upto_10,
    interest_rate_above_10,
  }) {
    this.title = title;
    this.description = description;
    this.financing_model = financing_model;
    this.image = image;
    this.phone = phone;
    this.start_limit = start_limit;
    this.end_limit = end_limit;
    this.org_name = org_name;
    this.type_of_user = type_of_user; // يجب أن تكون "organization"
    this.userId = userId;

    // نسب الفائدة حسب سنوات السداد
    this.interest_rate_upto_5 = interest_rate_upto_5;
    this.interest_rate_upto_10 = interest_rate_upto_10;
    this.interest_rate_above_10 = interest_rate_above_10;
  }
}

export default FinancingAdvertisementData;
