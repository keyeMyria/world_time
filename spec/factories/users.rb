FactoryGirl.define do

  factory :user do

    sequence(:email)      { Faker::Internet.email }
    # sequence(:name)       { Faker::Name.first_name }
    password '12345678'
    password_confirmation '12345678'

  end

end

