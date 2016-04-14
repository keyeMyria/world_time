FactoryGirl.define do

  factory :dashboard_city do
    association :dashboard
    association :city
  end

end
