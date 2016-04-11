class AddHomeCities < ActiveRecord::Migration
  def change
    add_column :cities, :home, :boolean, default: false
  end
end
