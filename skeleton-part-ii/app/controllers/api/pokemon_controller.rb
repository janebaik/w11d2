class Api::PokemonController < ApplicationController
  # this is the layer where we communicate with db
  def index 
    sleep 0.5  #to show that loading works
    @pokemon = Pokemon.all 
    render :index 
  end


  def show 
    sleep 0.5
    @pokemon = Pokemon.find(params[:id])
    render :show
  end
end
