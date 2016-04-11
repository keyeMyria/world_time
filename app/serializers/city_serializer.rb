class CitySerializer < ActiveModel::Serializer

  attributes :id, :name, :hour, :home

  def hour
    object.try(:hour).try(:zone)
  end

end
