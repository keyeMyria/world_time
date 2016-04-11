class CitySerializer < ActiveModel::Serializer

  attributes :id, :text, :hour, :home

  def text
    object.try(:name)
  end

  def hour
    object.try(:hour).try(:zone)
  end

end
