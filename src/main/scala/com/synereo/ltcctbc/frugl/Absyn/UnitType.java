package com.synereo.ltcctbc.frugl.Absyn; // Java Package generated by the BNF Converter.

public class UnitType extends GroundType {

  public UnitType() { }

  public <R,A> R accept(com.synereo.ltcctbc.frugl.Absyn.GroundType.Visitor<R,A> v, A arg) { return v.visit(this, arg); }

  public boolean equals(Object o) {
    if (this == o) return true;
    if (o instanceof com.synereo.ltcctbc.frugl.Absyn.UnitType) {
      return true;
    }
    return false;
  }

  public int hashCode() {
    return 37;
  }


}
