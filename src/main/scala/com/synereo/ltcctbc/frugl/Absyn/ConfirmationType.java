package com.synereo.ltcctbc.frugl.Absyn; // Java Package generated by the BNF Converter.

public class ConfirmationType extends LTyp {
  public final LTyp ltyp_1, ltyp_2;

  public ConfirmationType(LTyp p1, LTyp p2) { ltyp_1 = p1; ltyp_2 = p2; }

  public <R,A> R accept(com.synereo.ltcctbc.frugl.Absyn.LTyp.Visitor<R,A> v, A arg) { return v.visit(this, arg); }

  public boolean equals(Object o) {
    if (this == o) return true;
    if (o instanceof com.synereo.ltcctbc.frugl.Absyn.ConfirmationType) {
      com.synereo.ltcctbc.frugl.Absyn.ConfirmationType x = (com.synereo.ltcctbc.frugl.Absyn.ConfirmationType)o;
      return this.ltyp_1.equals(x.ltyp_1) && this.ltyp_2.equals(x.ltyp_2);
    }
    return false;
  }

  public int hashCode() {
    return 37*(this.ltyp_1.hashCode())+this.ltyp_2.hashCode();
  }


}
