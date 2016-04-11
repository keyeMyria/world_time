class DashboardSerializer < ActiveModel::Serializer

  attributes :id
  has_many :cities, embed: :ids, include: true

end
