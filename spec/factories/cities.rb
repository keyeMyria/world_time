FactoryGirl.define do

  factory :city do
    sequence(:name) { Faker::Address.city }
    # association :hour
  end

end
