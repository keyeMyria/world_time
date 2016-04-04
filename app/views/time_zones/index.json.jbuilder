json.array!(@time_zones) do |time_zone|
  json.extract! time_zone, :id, :name
  json.url time_zone_url(time_zone, format: :json)
end
